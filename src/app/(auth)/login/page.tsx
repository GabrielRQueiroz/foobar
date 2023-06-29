import {FormLogin} from "./FormLogin"
import Image from "next/image"

const LoginPage = () => {
    return (
			<>
				<div className="m-auto hidden md:inline">
					<Image src="/Subaru-Login.webp" width={310} height={400} alt="Subaru Login" />
				</div>
				<div className="m-auto">
					<Image
						className="hidden [[data-theme=fantasy]_&]:block"
						src="/Rematch-logo.webp"
						width={350}
						height={250}
						alt="Logo Form"
					/>
					<Image
						className="hidden [[data-theme=dark]_&]:block "
						src="/Rematch-lg-white.webp"
						width={350}
						height={250}
						alt="Logo Form"
					/>
					<FormLogin />
				</div>
			</>
		)
}

export default LoginPage