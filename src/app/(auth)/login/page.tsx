import {FormLogin} from "./FormLogin"
import Image from "next/image"

const LoginPage = () => {
    return (
			<main className="flex h-screen w-full justify-between bg-base-100">
				<div data-cy="Subaru" className="m-auto hidden md:inline">
					<Image src="/Subaru-Login.webp" width={310} height={400} alt="Subaru Login" />
				</div>
				<div data-cy="Form" className="m-auto">
					<Image
						priority
						className="hidden [[data-theme=fantasy]_&]:block"
						src="/Rematch-logo.webp"
						width={350}
						height={250}
						alt="Logo Form"
					/>
					<Image
						priority
						className="hidden [[data-theme=dark]_&]:block "
						src="/Rematch-lg-white.webp"
						width={350}
						height={250}
						alt="Logo Form"
					/>
					<FormLogin />
				</div>
			</main>
		)
}

export default LoginPage