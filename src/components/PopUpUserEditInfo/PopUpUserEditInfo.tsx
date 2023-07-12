import React from 'react'
import { FormUserEditInfo } from './FormUserEditInfo'

// declare global {
// 	interface Window {
// 		my_modal_3: HTMLDialogElement | undefined
// 	}
// }

export const PopUpUserEditInfo = () => {
	const openModal = (id: string) => {
		const modal = document.getElementById(id) as HTMLDialogElement
		modal.showModal()
	}
	
	return (
		<>
			<button
				className="btn btn-neutral normal-case"
				onClick={() => openModal('user-info')}
			>
				Editar perfil
			</button>
			<dialog id="user-info" className="modal">
				<div className="modal-box">
					<FormUserEditInfo/>
				</div>
			</dialog>
		</>
	)
}

