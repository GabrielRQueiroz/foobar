import FormLogin from "./FormLogin"
import Image from "next/image"

const LoginPage = () => {
    return (
			<>
				<div className="m-auto hidden md:inline">
					<Image src="/Subaru-Login.webp" width={310} height={400} alt="Subaru Login" />
				</div>
				<div className="m-auto">
					<Image src="/Rematch-logo.webp" width={350} height={250} alt="Subaru Login" />
					<FormLogin />
				</div>
			</>
		)
}

export default LoginPage