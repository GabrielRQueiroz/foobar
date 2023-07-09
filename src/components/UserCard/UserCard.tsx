'use client'
import Image from 'next/image'
import PopUpUserEditInfo from '../PopUpUserEditInfo/PopUpUserEditInfo'

type UserInformation = {
	nome: string
	email: string
	numeroMatches: number
}

const Usercard = ({ nome, email, numeroMatches }: UserInformation) => {
	return (
		<>
			<div className="card w-full justify-start border-2 border-gray-100 bg-base-100 text-base-content drop-shadow-xl">
				<div className="flex flex-row justify-between p-8">
					<div className="flex w-10/12 flex-row gap-8">
						<div className="w-auto">
							<Image className="rounded-full" width={150} height={150} src="/user_profile.jpg" alt="user profile" />
						</div>
						<div className="flex flex-col justify-between py-4">
							<div className="flex flex-col justify-center gap-2 ">
								<p>Olá, {nome}!</p>
								<p>{email}</p>
							</div>

							<div className="bg-black-900 flex h-12 w-36 items-center justify-center rounded-lg bg-base-200">
								<p className="text-black">{numeroMatches} matches</p>
							</div>
						</div>
					</div>
					<div className="flex w-2/12">
						<PopUpUserEditInfo/>
					</div>
				</div>
			</div>
		</>
	)
}
export default Usercard