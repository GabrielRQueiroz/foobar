'use client'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import * as Yup from 'yup'


type FieldsType = {
	email: string
	password: string
}

export const FormLogin = () => {
	const {user, sendUserSignIn} = useAuth()
	const router = useRouter()
	const { mutate, isError, isLoading, isSuccess } = useMutation({
		mutationFn: sendUserSignIn,
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
						email: '',
						password: ''
					} as FieldsType
				}
				validationSchema={Yup.object().shape({
					email: Yup.string().email('Email é invalido').required('Email é necessário'),
					password: Yup.string().required('É necessário uma senha')
				})}
				onSubmit={fields => {
					mutate(fields)
					//alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
				}}
				component={({ errors, touched }) => (
					<Form className="h-full w-full text-base-content">
						<div className="p-2 text-sm">
							<p className="bold text-xl">Entrar no App</p>
							<br />
							<span>ou </span>
							<Link className="text-[#4F75FF] underline" href="/registro">
								criar uma conta
							</Link>
						</div>
						{isError && (
							<div>
								<p data-cy="failed-login" className="ml-2 text-error">E-mail ou senha incorretos.</p>
							</div>
						)}
						<div data-cy="email" className="p-2">
							<Field
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
						<div data-cy="password" className="p-2">
							<Field
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
						<div data-cy="submit" className="p-2">
							<button
								type="submit"
								disabled={isLoading || isSuccess || !!user}
								className="btn-primary btn mr-2 w-full text-primary-content"
							>
								{isLoading || isSuccess ? <span className="loading loading-spinner loading-md" /> : 'Entrar'}
							</button>
						</div>
					</Form>
				)}
			/>
		</div>
	)
}
