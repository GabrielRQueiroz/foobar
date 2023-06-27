'use client'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useMutation } from 'react-query'
import { useRouter } from 'next/navigation'

type fieldstype = {
	user: {
		name: string
		email: string
		password: string
		confirmPassword?: string
	}
}

const FormRegistro = () => {
	const router = useRouter()
	const { mutate, isError, error } = useMutation({
		mutationFn: (fields: fieldstype) => {
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
					user: {
						name: '',
						email: '',
						password: '',
						confirmPassword: ''
					}
				}}
				validationSchema={Yup.object().shape({
					name: Yup.string().required('Apelido é necessario'),
					email: Yup.string().email('Email é invalido').required('Email é necessario'),
					password: Yup.string()
						.min(6, 'Sua senha precisa ter no minimo 6 caracteres')
						.required('É necessario uma senha'),
					confirmPassword: Yup.string()
						.oneOf([Yup.ref('password')], 'Suas senhas não combinam')
						.required('É necessario confirmar sua senha')
				})}
				onSubmit={(fields: fieldstype) => {
					delete fields.user.confirmPassword
					mutate(fields)
					//alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
				}}
				render={({ errors, touched }) => (
					<Form className="h-full w-full text-black">
						<div className="p-2 text-sm text-black">
							<p className="bold text-xl">Criar conta</p>
							<br />
							<span>ou </span>
							<a className="text-[#4F75FF] underline" href="/login">
								entrar com conta existente
							</a>
						</div>
						{isError && (
							<div>
								<p> {error instanceof Error && error.message} </p>
							</div>
						)}
						<div className="p-2">
							<Field
								placeholder="Apelido"
								name="name"
								type="text"
								className={
									'placeholder-black-600 form-control w-full rounded-lg border-2 border-black bg-transparent p-2' +
									(errors.user?.name && touched.user?.name ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage name="name" component="div" className="invalid-feedback text-sm text-red-600" />
						</div>
						<div className="p-2">
							<Field
								placeholder="Email"
								name="email"
								type="text"
								className={
									'placeholder-black-600 form-control w-full rounded-lg border-2 border-black bg-transparent p-2' +
									(errors.user?.email && touched.user?.email ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage name="email" component="div" className="invalid-feedback  text-sm text-red-600" />
						</div>
						<div className="p-2">
							<Field
								placeholder="Senha"
								name="password"
								type="password"
								className={
									'placeholder-black-600 form-control w-full rounded-lg border-2 border-black bg-transparent p-2' +
									(errors.user?.password && touched.user?.password ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage name="password" component="div" className="invalid-feedback  text-sm text-red-600" />
						</div>
						<div className="p-2">
							<Field
								placeholder="Confirmar Senha"
								name="confirmPassword"
								type="password"
								className={
									'placeholder-black-600 form-control w-full rounded-lg border-2 border-black bg-transparent p-2' +
									(errors.user?.confirmPassword && touched.user?.confirmPassword ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage name="confirmPassword" component="div" className="invalid-feedback  text-sm text-red-600" />
						</div>
						<div className="p-2">
							<button type="submit" className="btn-color-black btn mr-2 w-full text-white">
								Registrar
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
