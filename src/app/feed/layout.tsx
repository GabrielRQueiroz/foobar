import { Navbar } from '@/components';
import { getUser } from '@/lib/auth'
import { ReactNode } from 'react'

export default function FeedLayout({ userFeed, onBoard }: { userFeed: ReactNode; onBoard: ReactNode }) {
	const hasPreferences = getUser()

	return (
		<>
			<Navbar />
			{hasPreferences ? userFeed : onBoard}
		</>
	)
}
