'use client'
import axios, { AxiosError } from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useMutation } from 'react-query'
import * as Yup from 'yup'
import clsx from 'clsx'

type FieldsType = {
		username: string
		email: string
		password: string
		confirmPassword?: string
}

const FormRegistro = () => {
	const router = useRouter()
	const { mutate, isError, isSuccess, error, isLoading } = useMutation({
		mutationFn: (fields: {user: FieldsType}) => {
			return axios.post('/user', fields)
		},
		onSuccess: () => {
			router.push('/login')
		}
	})
	return (
		<div className="m-auto flex items-center justify-center">
			<Formik
				initialValues={{
					username: '',
					email: '',
					password: '',
					confirmPassword: ''
				}}
				validationSchema={Yup.object().shape({
					username: Yup.string().required('Apelido é necessário'),
					email: Yup.string().email('Email é invalido').required('Email é necessário'),
					password: Yup.string()
						.min(6, 'Sua senha precisa ter no minimo 6 caracteres')
						.required('É necessário uma senha'),
					confirmPassword: Yup.string()
						.oneOf([Yup.ref('password')], 'Suas senhas não combinam')
						.required('É necessário confirmar sua senha')
				})}
				onSubmit={(fields: FieldsType) => {
					delete fields.confirmPassword
					mutate({"user": fields})
					//alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
				}}
				component={({ errors, touched }) => (
					<Form className="h-full w-full text-base-content">
						<div className="p-2 text-sm">
							<p className="bold text-xl">Criar conta</p>
							<br />
							<span>ou </span>
							<a className="text-[#4F75FF] underline" href="/login">
								entrar com conta existente
							</a>
						</div>
						{isError && (
							<div>
								<p className="ml-2 text-error">Name {error instanceof AxiosError && error.response?.data?.name }</p>
								<p className="ml-2 text-error">E-mail {error instanceof AxiosError && error.response?.data?.email }</p>
								{/* <p className="ml-2 text-error">E-mail já cadastrado.</p> */}
							</div>
						)}
						<div className="p-2">
							<Field
								placeholder="Apelido"
								name="name"
								disabled={isSuccess || isLoading}
								type="text"
								className={
									clsx('input-primary input w-full',
									(errors.name && touched.name ? ' is-invalid' : ''),
									isSuccess || isLoading && "disabled")
								}
							/>
							<ErrorMessage name="name" component="div" className="invalid-feedback text-sm text-error" />
						</div>
						<div className="p-2">
							<Field
								placeholder="Email"
								name="email"
								disabled={isSuccess || isLoading}
								type="text"
								className={
									clsx('input-primary input w-full',
									(errors.email && touched.email ? ' is-invalid' : ''),
									isSuccess || isLoading && "disabled")
								}
							/>
							<ErrorMessage name="email" component="div" className="invalid-feedback  text-sm text-error" />
						</div>
						<div className="p-2">
							<Field
								placeholder="Senha"
								name="password"
								disabled={isSuccess || isLoading}
								type="password"
								className={
									clsx('input-primary input w-full',
									(errors.password && touched.password ? ' is-invalid' : ''),
									isSuccess || isLoading && "disabled")
								}
							/>
							<ErrorMessage name="password" component="div" className="invalid-feedback  text-sm text-error" />
						</div>
						<div className="p-2">
							<Field
								placeholder="Confirmar Senha"
								name="confirmPassword"
								disabled={isSuccess || isLoading}
								type="password"
								className={
									clsx('input-primary input w-full',
									(errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : ''),
									isSuccess || isLoading && "disabled")
								}
							/>
							<ErrorMessage name="confirmPassword" component="div" className="invalid-feedback  text-sm text-error" />
						</div>
						<div className="p-2">
							<button disabled={isSuccess || isLoading} type="submit" className="btn-primary btn mr-2 w-full text-primary-content">
								{isSuccess || isLoading ? (
									<span className="loading loading-spinner loading-md" />
								) : "Registrar"}
							</button>
						</div>
						<div className="p-2 text-sm text-white">
							<a className="text-[#4F75FF] underline" href="/esqueceu-senha">
								Esqueci minha senha
							</a>
						</div>
					</Form>
				)}
			/>
		</div>
	)
}
export default FormRegistro
