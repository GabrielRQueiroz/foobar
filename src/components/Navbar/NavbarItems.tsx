'use client'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

export const NavbarItems = () => {
	const { isAdmin } = useAuth()

	return (
		<>
			<li>
				<Link href="/feed/books">Livros</Link>
			</li>
			<li>
				<Link href="/feed/movies">Filmes</Link>
			</li>
			<li>
				<Link href="/feed/shows">Séries</Link>
			</li>
			{isAdmin && (
				<>
					<li>
						<Link href="/admin">Admin</Link>
					</li>
				</>
			)}
		</>
	)
}
