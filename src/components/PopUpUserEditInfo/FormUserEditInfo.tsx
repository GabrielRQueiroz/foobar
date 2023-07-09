'use client'
import { apiEndpoints } from '@/lib/routes'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import clsx from 'clsx'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import * as Yup from 'yup'

import { FormikProps } from 'formik/dist/types'

const sendUserSignIn = async (fields: FieldsType) => {
	return axios.post(apiEndpoints.POST_USER_LOGIN, fields)
}

type FieldsType = {
    name: string,
	email: string,
	newPassword: string
}

export const FormUserEditInfo = () => {
	const router = useRouter()
	const { mutate, isError, isLoading, isSuccess } = useMutation({
		mutationFn: sendUserSignIn,
		onSuccess: () => {
			router.push('/feed')
		}
	})
	return (
		<div className="m-auto flex items-center justify-center">
			<Formik
				initialValues={
					{
						name: '',
						email: '',
						newPassword: ''
					} as FieldsType
				}
				validationSchema={Yup.object().shape({
					name: Yup.string().required('Usuário é necessário'),
					email: Yup.string().email('Email é invalido').required('Email é necessário'),
					newPassword: Yup.string()
						.min(6, 'Sua senha precisa ter no minimo 6 caracteres')
						.required('É necessário uma senha')
				})}
				onSubmit={fields => {
					mutate(fields)
					//alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
				}}
				component={({ errors, touched }: FormikProps<FieldsType>) => (
					<Form className="h-full w-full text-base-content">
						<div className="flex w-full flex-col items-center">
							<button className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">✕</button>
							<h3 className="text-lg font-bold">Atualize suas informações pessoais</h3>
							<h2 className="w-full p-4 text-center">
								Aqui você pode alterar seu nome e senha para manter seus dados atualizados e garantir a segurança da sua
								conta.
							</h2>
						</div>
						{isError && (
							<div>
								<p className="ml-2 text-error">E-mail ou senha incorretos.</p>
								<p className="ml-2 text-error">E-mail ou senha incorretos.</p>
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
								data-cy="newPassword"
								disabled={isLoading || isSuccess}
								placeholder="Nova senha"
								name="newPassword"
								type="password"
								className={clsx(
									'placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2',
									errors.newPassword && touched.newPassword ? 'is-invalid' : '',
									(isLoading || isSuccess) && 'input-disabled'
								)}
							/>
							<ErrorMessage name="newPassword" component="div" className="invalid-feedback text-sm text-error" />
						</div>
						<div className="p-2">
							<button
								type="submit"
								disabled={isLoading || isSuccess}
								className="btn-primary btn mr-2 w-full text-primary-content"
							>
								{isLoading || isSuccess ? <span className="loading loading-spinner loading-md" /> : 'Confirmar'}
							</button>
						</div>
					</Form>
				)}
			/>
		</div>
	)
}
