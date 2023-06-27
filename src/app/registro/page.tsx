import FormRegistro from "@/components/pages/Registro/FormRegistro"
import Image from "next/image"

const RegistroPage = () => {
    return(
        <div className="flex justify-between w-full h-screen bg-white">
                <div className="m-auto">
                <Image
                    src="/Emilia-Registro.webp"
                    width={450}
                    height={570}
                    alt="Subaru Login"
                    />
                </div>
                <div className="m-auto">
                    <Image
                        src="/Rematch-logo.webp"
                        width={350}
                        height={250}
                        alt="Subaru Login"
                        />
                    <FormRegistro/>
                </div>
        </div>
    
    )
}

export default RegistroPage