import FormLogin from "@/components/pages/Login/FormLogin"
import Image from "next/image"

const LoginPage = () => {
    return(
        <div className="flex justify-between w-full h-screen bg-white">
                <div className="m-auto">
                <Image
                    src="/Subaru-Login.webp"
                    width={310}
                    height={400}
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
                    <FormLogin/>
                </div>
        </div>
    
    )
}

export default LoginPage