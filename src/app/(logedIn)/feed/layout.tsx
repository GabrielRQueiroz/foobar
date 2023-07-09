import { ReactNode } from 'react'

export default function FeedLayout({ userFeed, onBoard }: { userFeed: ReactNode; onBoard: ReactNode }) {
	return (
		<>	
			{onBoard}		
			{userFeed}
		</>
	)
}
