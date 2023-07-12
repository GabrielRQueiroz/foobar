import { FormRegistro } from "./FormRegistro"
import Image from "next/image"

const RegistroPage = () => {
    return (
			<main className='flex h-screen w-full justify-between bg-base-100'>
				<div data-cy="Emilia" className="m-auto hidden md:inline">
					<Image src="/Emilia-Registro.webp" width={450} height={570} alt="Emilia Registro" />
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
					<FormRegistro />
				</div>
			</main>
		)
}

export default RegistroPage