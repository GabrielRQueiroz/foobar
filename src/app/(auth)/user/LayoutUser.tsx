import Usercard from "@/components/UserCard/UserCard"
import PreferencesCard from "@/components/preferencesCard/PreferencesCard"
export const LayoutUser = () => {
	return (
		<>
			<div className="flex h-full w-full flex-col justify-evenly gap-2">
				<div className="flex flex-col ">
					<Usercard nome="Shaolin" email="shaolinmatadordeporco@hotmail.com" numeroMatches={20} />
				</div>
				<div className="flex h-3/5 flex-col ">
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
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' },
							{ title: 'O alto da compadecida', gender: 'Comedia', image: '/user_profile.jpg' }
						]}
					/>
				</div>
			</div>
		</>
	)
}
