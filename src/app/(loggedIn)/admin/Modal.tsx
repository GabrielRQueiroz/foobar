import { useAuth } from '@/hooks/useAuth'
import { createItem } from '@/lib/api'
import { useMutation } from '@tanstack/react-query'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-hot-toast'
import * as Yup from 'yup'

type FieldsType = {
	name: string
	author: string
	year: number
	tag_name: string
}

export const Modal = ({ category, onSubmit }: { category: 'Livros' | 'Filmes' | 'Series' ;  onSubmit: () => void}) => {
	const openModal = (id: string) => {
		const modal = document.getElementById(id) as HTMLDialogElement
		modal.showModal()
	}
	const closeModal = (id: string) => {
		const modal = document.getElementById(id) as HTMLDialogElement
		modal.close()
	}
	const { user } = useAuth()
	const { mutate } = useMutation({
		mutationFn: (fields: any) => createItem(user?.auth_token, fields, category),
		onSuccess: () => {
			closeModal('create')
            onSubmit()
            toast.success('CADASTRADO!')
		}
	})
	return (
		<>
			<button className="btn" onClick={() => openModal('create')}>
				Cadastrar {category}
			</button>
			<dialog id="create" className="modal modal-bottom sm:modal-middle">
				<Formik
					initialValues={
						{
							name: '',
							author: '',
							year: 2000,
							tag_name: ''
						} as FieldsType
					}
					validationSchema={Yup.object().shape({
						name: Yup.string().required('É necessário um nome'),
						author: Yup.string().required('É necessário um Autor'),
						year: Yup.number().required('É necessário um ano'),
						tag_name: Yup.string().required('É necessário um genero')
					})}
					onSubmit={fields => {
						mutate(fields)
					}}
					component={({ errors, touched }) => (
						<Form method="dialog" className="modal-box">
							<div className="p-2 text-sm">
								<p className="bold text-xl">Cadastrar {category}!</p>
							</div>
							<div data-cy="name" className="p-2">
								<Field
									placeholder="name"
									name="name"
									type="text"
									className="placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2"
								/>
							</div>
							<div data-cy="author" className="p-2">
								<Field
									placeholder="autor"
									name="author"
									type="text"
									className="placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2"
								/>
							</div>
							<div data-cy="year" className="p-2">
								<Field
									placeholder="Ano"
									name="year"
									type="number"
									className="placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2"
								/>
							</div>
							<div data-cy="tag_name" className="p-2">
								<Field
									as="select"
									placeholder="name"
									name="tag_name"
									className="placeholder-black-600 form-control input-primary w-full rounded-lg border-2 bg-transparent p-2"
								>
									<option disabled selected>
										Escolha um
									</option>
									<option>Comedia</option>
									<option>Melodrama</option>
									<option>Terror</option>
									<option>Suspense</option>
									<option>Romance</option>
								</Field>
							</div>
							<div data-cy="submit" className="modal-action p-2">
								<button type="submit" className="btn-primary btn mr-2 flex flex-grow text-primary-content">
									Cadastrar
								</button>
								<button type="button" className="btn" onClick={() => closeModal('create')}>
									Cancelar
								</button>
							</div>
						</Form>
					)}
				/>
			</dialog>
		</>
	)
}
