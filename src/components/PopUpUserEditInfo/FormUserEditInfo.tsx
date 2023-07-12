'use client'
import { useAuth } from '@/hooks/useAuth'
import { apiEndpoints } from '@/lib/routes'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import clsx from 'clsx'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { FormikProps } from 'formik/dist/types'
import jwtDecode from 'jwt-decode'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

const sendUserUpdate = async (fields: FieldsType, userId: number | undefined, userAuth: string | undefined) => {
	if (!userId || !userAuth) return
	const userData = await axios
		.post(apiEndpoints.POST_USER_LOGIN, {
			email: fields.email,
			password: fields.oldPassword
		})
		.then(res => res.data)

	const token = userData.auth_token
	const decoded = jwtDecode<{ user_id: number }>(token)
	const isAuthenticated = decoded.user_id === userId

	if (!isAuthenticated) {
		toast.error('Credenciais incorretas')
		return
	} else {
		const response = await axios
			.put(
				`${apiEndpoints.POST_USER_SIGN_UP}/${userId}`,
				{
					email: fields.email,
					password: fields.newPassword
				},
				{
					headers: {
						Authorization: `${userAuth}`
					}
				}
			)
			.then(() => localStorage.setItem('user', JSON.stringify(userData)))
		toast.success('Suas credenciais foram atualizadas')
		return
	}
}

type FieldsType = {
	email: string
	oldPassword: string
	newPassword: string
}

export const FormUserEditInfo = () => {
	const { user } = useAuth()
	const { mutate, isError, isLoading, isSuccess } = useMutation({
		mutationKey: ['update', 'user', user?.user_id, user?.auth_token],
		mutationFn: (fields: FieldsType) => sendUserUpdate(fields, user?.user_id, user?.auth_token),
		onSuccess: () => {
			closeModal('user-info')
		}
	})

	const closeModal = (id: string) => {
		const modal = document.getElementById(id) as HTMLDialogElement
		modal.close()
	}

	return (
		<Formik
			initialValues={
				{
					email: '',
					oldPassword: '',
					newPassword: ''
				} as FieldsType
			}
			validationSchema={Yup.object().shape({
				email: Yup.string().email('Email é invalido').required('Email é necessário'),
				oldPassword: Yup.string()
					.min(6, 'Sua senha precisa ter no minimo 6 caracteres')
					.required('É necessário inserir sua senha'),
				newPassword: Yup.string()
					.min(6, 'Sua senha precisa ter no minimo 6 caracteres')
					.required('É necessário uma senha')
			})}
			onSubmit={(fields: FieldsType, { resetForm }) => {
				mutate(fields)
				resetForm()
			}}
			component={({ errors, touched }: FormikProps<FieldsType>) => (
				<Form method="dialog" className="h-full w-full text-base-content">
					<div className="flex w-full flex-col items-center">
						<button
							type="button"
							onClick={e => {
								e.preventDefault()
								closeModal('user-info')
							}}
							className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2"
						>
							✕
						</button>
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
					<div className="my-2">
						<Field
							disabled={isLoading}
							placeholder="Email"
							name="email"
							type="text"
							className={clsx(
								'placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2',
								errors.email && touched.email ? 'is-invalid' : '',
								isLoading && 'input-disabled'
							)}
						/>
						<ErrorMessage name="email" component="div" className="invalid-feedback text-sm text-error" />
					</div>
					<div className="my-2">
						<Field
							data-cy="oldPassword"
							disabled={isLoading}
							placeholder="Senha antiga"
							name="oldPassword"
							type="password"
							className={clsx(
								'placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2',
								errors.oldPassword && touched.oldPassword ? 'is-invalid' : '',
								isLoading && 'input-disabled'
							)}
						/>
						<ErrorMessage name="oldPassword" component="div" className="invalid-feedback text-sm text-error" />
					</div>
					<div className="my-2">
						<Field
							data-cy="newPassword"
							disabled={isLoading}
							placeholder="Nova senha"
							name="newPassword"
							type="password"
							className={clsx(
								'placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2',
								errors.newPassword && touched.newPassword ? 'is-invalid' : '',
								isLoading && 'input-disabled'
							)}
						/>
						<ErrorMessage name="newPassword" component="div" className="invalid-feedback text-sm text-error" />
					</div>
					<button type="submit" disabled={isLoading} className="btn-primary btn w-full p-2 text-primary-content">
						{isLoading ? <span className="loading loading-spinner loading-md" /> : 'Confirmar'}
					</button>
				</Form>
			)}
		/>
	)
}
