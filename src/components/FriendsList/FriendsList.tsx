type FriendsListTypes = {
	numberOfFriends: number,
    listOfFriends: Array<string>,
}

const FriendsList = ({ numberOfFriends, listOfFriends }: FriendsListTypes) => {
	return (
		<>
			<div className="flex h-full w-full flex-col">
				<div className="flex h-[10%] w-full items-center justify-between rounded-b-3xl bg-primary px-4">
					<p className="text-lg text-white">Lista de amigos</p>
					<p className="text-lg text-white">{numberOfFriends}</p>
				</div>
				<div className="flex h-full flex-col overflow-y-auto">
					{listOfFriends.map(value => (
						<>
							<div className="flex h-fit items-center border-b-2">
								<div className=" w-full">
									<p className="m-4 flex text-lg">{value}</p>
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	)
}
export default FriendsList
