import { LayoutUser } from './LayoutUser'

const UserPage = () => {
	return (
		<>
			<div className="flex h-screen w-full border-8 bg-base-100 p-8 text-base-content">
				<LayoutUser />
				<div className=" phone-1 artboard artboard-horizontal text-base-content">teste</div>
				{/* <Image src="/background-LandingPage.jpg" width={400} height={0} alt="background" /> */}
			</div>
		</>
	)
}

export default UserPage
