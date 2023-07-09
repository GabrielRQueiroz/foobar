import React, { useEffect } from 'react'
import { FormUserEditInfo } from './FormUserEditInfo'

// declare global {
// 	interface Window {
// 		my_modal_3: HTMLDialogElement | undefined
// 	}
// }

const PopUpUserEditInfo = () => {
	useEffect(() => {
		const hideModal = () => {
			const modal = (window as any).my_modal_3
			if (modal) {
				modal.close()
			}
		}

		const modalButton = document.querySelector('.btn-ghost')
		if (modalButton) {
			modalButton.addEventListener('click', hideModal)
		}

		const modal = (window as any).my_modal_3
		if (modal) {
			modal.addEventListener('keydown', (event: any) => {
				if (event.key === 'Escape') {
					hideModal()
				}
			})
		}

		return () => {
			if (modalButton) {
				modalButton.removeEventListener('click', hideModal)
			}

			if (modal) {
				modal.removeEventListener('keydown', hideModal)
			}
		}
	}, [])

	return (
		<>
			<button
				className="btn w-[10vw] rounded-lg bg-black text-[0.9vw] normal-case text-white"
				onClick={() => (window as any).my_modal_3?.showModal()}
			>
				Editar perfil
			</button>
			<dialog id="my_modal_3" className="modal">
				<form className="modal-box">
					<div className="flex w-full flex-col items-center">
						<FormUserEditInfo/>
                    </div>
				</form>
			</dialog>
		</>
	)
}

export default PopUpUserEditInfo
