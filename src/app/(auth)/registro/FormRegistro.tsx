'use client'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import clsx from 'clsx'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import * as Yup from 'yup'

type FieldsType = {
	name: string
	email: string
	password: string
	confirmPassword?: string
}

export const FormRegistro = () => {
	const { user, sendUserSignUp } = useAuth()
	const router = useRouter()
	const { mutate, isError, isLoading, isSuccess, error } = useMutation({
		mutationFn: sendUserSignUp,
		onSuccess: () => {
			router.push('/feed/books')
		}
	})

	useEffect(() => {
		user && router.push("/feed/books")
	})
	
	return (
		<div className="m-auto flex items-center justify-center">
			<Formik
				initialValues={
					{
						name: '',
						email: '',
						password: '',
						confirmPassword: ''
					} as FieldsType
				}
				validationSchema={Yup.object().shape({
					name: Yup.string().required('Apelido é necessário'),
					email: Yup.string().email('Email é invalido').required('Email é necessário'),
					password: Yup.string()
						.min(6, 'Sua senha precisa ter no minimo 6 caracteres')
						.required('É necessário uma senha'),
					confirmPassword: Yup.string()
						.oneOf([Yup.ref('password')], 'Suas senhas não combinam')
						.required('É necessário confirmar sua senha')
				})}
				onSubmit={fields => {
					delete fields.confirmPassword

					mutate(fields)
					//alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
				}}
				component={({ errors, touched }) => (
					<Form className="h-full w-full text-base-content">
						<div className="p-2 text-sm">
							<p className="bold text-xl">Criar Conta</p>
							<br />
							<span>ou </span>
							<Link className="text-[#4F75FF] underline" href="/login">
								ja tenho uma conta
							</Link>
						</div>
						{isError && (
							<div>
								<p data-cy="name-taked" className="ml-2 text-error">
									{error instanceof AxiosError && error.response?.data?.name ? 'Nome já cadastrado' : ''}
								</p>
								<p data-cy="email-taked" className="ml-2 text-error">
									{' '}
									{error instanceof AxiosError && error.response?.data?.email ? 'Email já cadastrado' : ''}{' '}
								</p>
								{/* <p className="ml-2 text-error">E-mail já cadastrado.</p> */}
							</div>
						)}
						<div className="p-2">
							<Field
								data-cy="name"
								disabled={isLoading || isSuccess}
								placeholder="Usuario"
								name="name"
								type="text"
								className={clsx(
									'placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2',
									errors.name && touched.name ? 'is-invalid' : '',
									(isLoading || isSuccess) && 'input-disabled'
								)}
							/>
							<ErrorMessage name="name" component="div" className="invalid-feedback text-sm text-error" />
						</div>
						<div className="p-2">
							<Field
								data-cy="email"
								disabled={isLoading || isSuccess}
								placeholder="Email"
								name="email"
								type="text"
								className={clsx(
									'placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2',
									errors.email && touched.email ? 'is-invalid' : '',
									(isLoading || isSuccess) && 'input-disabled'
								)}
							/>
							<ErrorMessage name="email" component="div" className="invalid-feedback text-sm text-error" />
						</div>
						<div className="p-2">
							<Field
								data-cy="password"
								disabled={isLoading || isSuccess}
								placeholder="Senha"
								name="password"
								type="password"
								className={clsx(
									'placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2',
									errors.password && touched.password ? 'is-invalid' : '',
									(isLoading || isSuccess) && 'input-disabled'
								)}
							/>
							<ErrorMessage name="password" component="div" className="invalid-feedback text-sm text-error" />
						</div>
						<div className="p-2">
							<Field
								data-cy="confirmPassword"
								disabled={isLoading || isSuccess}
								placeholder="Confirmar senha"
								name="confirmPassword"
								type="password"
								className={clsx(
									'placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2',
									errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : '',
									(isLoading || isSuccess) && 'input-disabled'
								)}
							/>
							<ErrorMessage name="confirmPassword" component="div" className="invalid-feedback text-sm text-error" />
						</div>
						<div className="p-2">
							<button
								data-cy="submit"
								type="submit"
								disabled={isLoading || isSuccess || !!user}
								className="btn-primary btn mr-2 w-full text-primary-content"
							>
								{isLoading || isSuccess ? <span className="loading loading-spinner loading-md" /> : 'Cadastrar'}
							</button>
						</div>
					</Form>
				)}
			/>
		</div>
	)
}
