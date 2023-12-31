'use client'

import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

export const UserAvatar = () => {
	const { user, logout } = useAuth()

	return (
		<ul className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow outline outline-1 outline-base-200">
			<li>
				{user ? (
					<Link href={`/user/${user.user_id}`} className="justify-between">
						Perfil
					</Link>
				) : (
					<div className="loading loading-spinner mx-auto" />
				)}
			</li>
			<li>
				<button disabled={!user} type="button" className="text-error" onClick={logout}>
					{!user ? <div className="loading loading-spinner mx-auto" /> : 'Desconectar'}
				</button>
			</li>
		</ul>
	)
}
