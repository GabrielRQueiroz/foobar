import { getAllBooks } from '@/lib/api'
import { getQueryClient } from '@/utils/getQueryClient'
import { Hydrate } from '@/utils/hydrateClient'
import { dehydrate } from '@tanstack/react-query'
import { InfiniteListAdmin } from './InfiniteListAdmin'

export default async function AdminPage() {
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['admin', 'books'],
		queryFn: (authToken: any) => getAllBooks(authToken)
	})
	const dehydratedState = dehydrate(queryClient)

	return (
		<Hydrate state={dehydratedState}>
			<InfiniteListAdmin />
		</Hydrate>
	)
}
