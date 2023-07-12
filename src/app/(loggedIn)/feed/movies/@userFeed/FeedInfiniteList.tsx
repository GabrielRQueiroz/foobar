'use client'

import { useAuth } from '@/hooks/useAuth'
import { getFeed } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { ItemCard } from '../../ItemCard'
import { useRouter } from 'next/navigation'

export const FeedInfiniteList = () => {
	const { user } = useAuth()
	const router = useRouter()
	const { data: feedData, refetch } = useQuery({
		queryKey: ['feed', 'movies', user?.user_id],
		queryFn: () => getFeed(user?.user_id, 'MOVIES'),
		enabled: !!user?.user_id,
		onError: () => {
			typeof window !== 'undefined' && localStorage.removeItem('user')
			router.replace('/login')
		}
	})

	return (
		<>
			{feedData ? (
				<div className="grid max-w-7xl grid-cols-1 ip3:grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8 w-full">
					{feedData.map((suggestion: any, index: number) => (
						<ItemCard key={`${suggestion.id}-${suggestion.name}-${index}`} onMatch={refetch} category="MOVIES" suggestion={suggestion} />
					))}
				</div>
			) : (
				'Loading...'
			)}
		</>
	)
}
