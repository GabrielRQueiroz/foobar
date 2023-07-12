'use client'

import { useAuth } from '@/hooks/useAuth'
import { getFeed } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ItemCard } from '../../ItemCard'

export const FeedInfiniteList = () => {
	const { user } = useAuth()
	const router = useRouter()
	const { data: feedData, refetch } = useQuery({
		queryKey: ['feed', 'books', user?.user_id],
		queryFn: () => getFeed(user?.user_id, 'BOOKS'),
		enabled: !!user?.user_id,
		onError: () => {
			localStorage.removeItem('user')
			router.replace('/login')
		}
	})

	return (
		<>
			{feedData ? (
				<div className="grid w-full max-w-7xl grid-cols-1 gap-x-4 gap-y-6 ip3:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
					{feedData.map((suggestion: any, index: number) => (
						<ItemCard
							key={`${suggestion.id}-${suggestion.name}-${index}`}
							onMatch={refetch}
							category="BOOKS"
							suggestion={suggestion}
						/>
					))}
				</div>
			) : (
				'Loading...'
			)}
		</>
	)
}
