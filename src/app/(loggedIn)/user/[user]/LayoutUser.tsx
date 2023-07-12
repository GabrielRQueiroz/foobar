'use client'

import { FriendsList, PreferencesCard, UserCard } from '@/components'
import { getSimilarUsers, getUserData } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export const LayoutUser = ({ userId }: { userId: string }) => {
	const { data: userData } = useQuery({
		queryKey: ['user', userId],
		queryFn: () => getUserData(parseInt(userId))
	})
	const {data: friendsData} = useQuery({
		queryKey: ['friends', userId],
		queryFn: () => getSimilarUsers(parseInt(userId))
	})

	return (
		<>
			<div className="flex h-full w-full max-w-7xl sm:flex-row flex-col-reverse justify-between gap-4">
				<div className="flex-col basis-1/2">
					<UserCard nome={userData.name} email="shaolinmatadordeporco@hotmail.com" numeroMatches={20} />
					<PreferencesCard
						preferences={[
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' }
						]}
					/>
				</div>
				<FriendsList listOfFriends={friendsData || []} />
			</div>
		</>
	)
}
