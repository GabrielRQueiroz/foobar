'use client'

import { useAuth } from '@/hooks/useAuth'
import { getBookFeed } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { ItemCard } from '../../ItemCard'

export const FeedInfiniteList = () => {
	const { user } = useAuth()
	const { data: feedData } = useQuery({
		queryKey: ['feed', 'books', user?.user_id],
		queryFn: () => getBookFeed(user?.user_id),
		enabled: !!user?.user_id,
	})

	return (
		<>
			{feedData ? (
				<div className="grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
					{feedData.map((suggestion: any, index: number) => (
						<ItemCard key={`${suggestion.id}-${suggestion.name}-${index}`} suggestion={suggestion} />
					))}
				</div>
			) : (
				'Loading...'
			)}
		</>
	)
}
