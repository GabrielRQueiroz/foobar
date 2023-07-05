import { PreferencesList } from './PreferencesList'

export default function OnBoardMenu() {
	return (
		<dialog
			id="onboarding-menu"
			className="modal modal-open"
		>
			<form method="dialog" className="modal-box relative p-0">
				<div className="sticky top-0 z-30 p-6 text-center bg-base-100">
					<h3 className="text-lg font-bold">Boas vindas ao Re:Match!</h3>
					<p className="py-2">Antes de prosseguir, nos mostre um pouco do que você gosta</p>
					<p className="text-sm text-info">Você poderá modifacá-las mais tarde</p>
				</div>
				<PreferencesList />
			</form>
		</dialog>
	)
}
