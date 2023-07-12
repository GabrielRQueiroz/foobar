type FriendsListTypes = {
	listOfFriends: any[]
}

const FriendsList = ({ listOfFriends }: FriendsListTypes) => {
	return (
		<>
			<div className="flex flex-1 flex-col text-base-content">
				<div className="flex py-8 w-full items-center justify-between rounded-t-2xl bg-neutral text-neutral-content px-4">
					<p className="text-lg">Lista de amigos</p>
					<p className="text-lg">{listOfFriends.length}</p>
				</div>
				<div className="flex h-full flex-col overflow-y-auto">
					{listOfFriends.map(user => (
						<div key={`${user.name}-${user.id}`} className="flex h-fit items-center border-b-2">
							<div className=" w-full">
								<p className="m-4 flex text-lg">{user.name}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
export default FriendsList
