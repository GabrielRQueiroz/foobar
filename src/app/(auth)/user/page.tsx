import { LayoutUser } from './LayoutUser'
import FriendsList from '@/components/FriendsList/FriendsList'
const UserPage = () => {
	return (
		<>
			<div className="flex h-screen w-full gap-6 bg-base-100 p-8 text-base-content">
				<div className="flex w-8/12">
					<LayoutUser />
				</div>
				<div className="flex h-full w-4/12 rounded-b-xl  border-x-2 border-b-2 text-base-content">
					<FriendsList
						numberOfFriends={12}
						listOfFriends={['Juninho do Brás', 'Marquinhos pastel', 'Tião Carreiro', 'Xandinho do Samba']}
					/>
				</div>
			</div>
		</>
	)
}

export default UserPage
