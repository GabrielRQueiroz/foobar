'use client'

import { useAuth } from '@/hooks/useAuth'
import { getFeed, getUserData } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

export default function FeedLayout({ userFeed, onBoard }: { userFeed: ReactNode; onBoard: ReactNode }) {
	const { user } = useAuth()
	const router = useRouter()
	const { data: preferences } = useQuery({
		queryKey: ['preferences', 'books', user?.user_id],
		queryFn: () => getFeed(user?.user_id, 'BOOKS'),
		onError: () => {
			localStorage.removeItem('user')
			router.replace('/login')
		}
	})
	const {data: userData} = useQuery({
		queryKey: ['user', user?.user_id],
		queryFn: () => getUserData(user?.user_id),
	})

	return (
		<>
			{preferences?.reduce((acc: any, curr: any) => acc + curr.match, 0) === 0 && onBoard}
			{userFeed}
		</>
	)
	
}
