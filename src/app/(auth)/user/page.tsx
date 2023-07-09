import { LayoutUser } from './LayoutUser'

const UserPage = () => {
	return (
		<>
			<div className="flex h-screen w-8/12 border-8 p-8">
				<LayoutUser />
			</div>
			<div className="flex max-h-full w-4/12 flex-col gap-8 border-8" />
		</>
	)
}

export default UserPage
