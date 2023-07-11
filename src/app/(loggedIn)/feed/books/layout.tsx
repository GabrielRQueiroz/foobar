import { ReactNode } from 'react'

export default async function FeedLayout({ userFeed, onBoard }: { userFeed: ReactNode; onBoard: ReactNode }) {
	let hasPreferences = true

	return <>{hasPreferences ? userFeed : onBoard}</>
}
