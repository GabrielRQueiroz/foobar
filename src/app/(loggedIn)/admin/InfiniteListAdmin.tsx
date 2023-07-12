'use client'

import { useAuth } from '@/hooks/useAuth'
import { getAllBooks } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { ItemCardAdmin } from './ItemCardAdmin'
import { Modal } from './Modal'

export const InfiniteListAdmin = () => {
	const { user } = useAuth()
	const { data: adminData, refetch } = useQuery({
		queryKey: ['admin', 'books', user?.auth_token],
		queryFn: () => getAllBooks(user?.auth_token),
		enabled: !!user?.auth_token
	})

	return (
		<>
			{adminData ? (
				<>
					<Modal category='Livros' onSubmit={refetch}/>
					<div className=" grid w-full max-w-7xl grid-cols-2 gap-x-4 gap-y-6 bg-base-100 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
						{adminData.map((nameBooks: any, index: number) => (
							<ItemCardAdmin
								key={`${nameBooks.id}-${nameBooks.name}-${index}`}
								onDelete={refetch}
								nameBooks={nameBooks}
							/>
						))}
					</div>
				</>
			) : (
				'Loading...'
			)}
		</>
	)
}
