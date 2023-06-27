'use client'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useMutation } from 'react-query'
import { useRouter } from 'next/navigation'

type fieldstype = {
	email: string
	password: string
}

const FormLogin = () => {
	const router = useRouter()
	const { mutate } = useMutation({
		mutationFn: (fields: fieldstype) => {
			return axios.post('/auth/login', fields)
		},
		onSuccess: () => {
			router.push('/')
		}
	})
	return (
		<div className="m-auto flex items-center justify-center">
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string().email('Email é invalido').required('Email é necessario'),
					password: Yup.string()
						.min(6, 'Sua senha precisa ter no minimo 6 caracteres')
						.required('É necessario uma senha')
				})}
				onSubmit={fields => {
					mutate(fields)
					//alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
				}}
				render={({ errors, touched }) => (
					<Form className="h-full w-full text-black">
						<div className="p-2 text-sm text-black">
							<p className="bold text-xl">Entrar no App</p>
							<br />
							<span>ou </span>
							<a className="text-[#4F75FF] underline" href="/registro">
								criar uma conta
							</a>
						</div>
						<div className="p-2">
							<Field
								placeholder="Email"
								name="email"
								type="text"
								className={
									'placeholder-black-600 form-control w-full rounded-lg border-2 border-black bg-transparent p-2' +
									(errors.email && touched.email ? ' is-invalid' : '')
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
									(errors.password && touched.password ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage name="password" component="div" className="invalid-feedback  text-sm text-red-600" />
						</div>
						<div className="p-2">
							<button type="submit" className="btn-color-black btn mr-2 w-full text-white">
								Entrar
							</button>
						</div>
					</Form>
				)}
			/>
		</div>
	)
}
export default FormLogin
