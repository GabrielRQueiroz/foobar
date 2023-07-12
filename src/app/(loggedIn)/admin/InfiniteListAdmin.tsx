'use client'

import { useAuth } from '@/hooks/useAuth'
import { getAllBooks, getAllMovies, getAllShows } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { ItemCardAdmin } from './ItemCardAdmin'
import { Modal } from './Modal'

export const InfiniteListAdmin = () => {
	const { user } = useAuth()
	const { data: bookData, refetch: refetchBooks } = useQuery({
		queryKey: ['admin', 'books', user?.auth_token],
		queryFn: () => getAllBooks(user?.auth_token),
		enabled: !!user?.auth_token
	})
	const { data: movieData, refetch: refetchMovies } = useQuery({
		queryKey: ['admin', 'movie', user?.auth_token],
		queryFn: () => getAllMovies(user?.auth_token),
		enabled: !!user?.auth_token
	})
	const { data: showData, refetch: refetchShows } = useQuery({
		queryKey: ['admin', 'show', user?.auth_token],
		queryFn: () => getAllShows(user?.auth_token),
		enabled: !!user?.auth_token
	})

	return (
		<>
			{bookData ? (
				<>
					<Modal category="Livros" onSubmit={refetchBooks} />
					<div className=" grid w-full max-w-7xl grid-cols-2 gap-x-4 gap-y-6 bg-base-100 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
						{bookData.map((nameBooks: any, index: number) => (
							<ItemCardAdmin
								category="Livros"
								key={`${nameBooks.id}-${nameBooks.name}-${index}`}
								onDelete={refetchBooks}
								nameBooks={nameBooks}
							/>
						))}
					</div>
				</>
			) : (
				'Loading...'
			)}
			{movieData ? (
				<>
					<Modal category="Filmes" onSubmit={refetchMovies} />
					<div className=" grid w-full max-w-7xl grid-cols-2 gap-x-4 gap-y-6 bg-base-100 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
						{movieData.map((nameMovies: any, index: number) => (
							<ItemCardAdmin
								category="Filmes"
								key={`${nameMovies.id}-${nameMovies.name}-${index}`}
								onDelete={refetchMovies}
								nameBooks={nameMovies}
							/>
						))}
					</div>
				</>
			) : (
				'Loading...'
			)}
			{showData ? (
				<>
					<Modal category="Series" onSubmit={refetchShows} />
					<div className=" grid w-full max-w-7xl grid-cols-2 gap-x-4 gap-y-6 bg-base-100 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
						{showData.map((nameShows: any, index: number) => (
							<ItemCardAdmin
								category="Series"
								key={`${nameShows.id}-${nameShows.name}-${index}`}
								onDelete={refetchShows}
								nameBooks={nameShows}
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
