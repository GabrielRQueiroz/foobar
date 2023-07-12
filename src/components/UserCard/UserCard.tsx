'use client'
import Image from 'next/image'
import { PopUpUserEditInfo } from '../PopUpUserEditInfo/PopUpUserEditInfo'

type UserInformation = {
	nome: string
	email: string
	numeroMatches: number
}

export const UserCard = ({ nome, email, numeroMatches }: UserInformation) => {
	return (
		<>
			<div className="card card-compact bg-base-100 text-base-content card-bordered mb-4">
				<div className="card-body">
					<div className="flex flex-row flex-wrap justify-between items-center gap-4">
						<div className="flex-shrink h-24 mx-auto aspect-square relative">
							<Image className="rounded-full" fill src="/user_profile.jpg" alt="user profile" />
						</div>
						<div className="flex flex-grow flex-col justify-between gap-2">
							<div className="flex flex-col w-full justify-center gap-2 overflow-ellipsis">
								<p className="card-title">Olá, {nome}!</p>
								<p className="text-base text-ellipsis whitespace-nowrap w-56 sm:w-full overflow-hidden">{email}</p>
							</div>

							<div className="badge badge-neutral badge-lg">
								<p>{numeroMatches} matches</p>
							</div>
						</div>
					</div>
					<div className="card-actions justify-end">
						<PopUpUserEditInfo/>
					</div>
				</div>
			</div>
		</>
	)
}