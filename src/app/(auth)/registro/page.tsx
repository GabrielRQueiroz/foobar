import { FormRegistro } from "./FormRegistro"
import Image from "next/image"

const RegistroPage = () => {
    return (
			<>
				<div data-cy="Emilia" className="m-auto hidden md:inline">
					<Image src="/Emilia-Registro.webp" width={450} height={570} alt="Subaru Login" />
				</div>
				<div data-cy="Form" className="m-auto">
					<Image src="/Rematch-logo.webp" width={350} height={250} alt="Subaru Login" />
					<FormRegistro />
				</div>
			</>
		)
}

export default RegistroPage