import { getSimilarUsers, getUserData } from '@/lib/api';
import { getQueryClient } from '@/utils/getQueryClient';
import { Hydrate } from '@/utils/hydrateClient';
import { dehydrate } from '@tanstack/react-query';
import { LayoutUser } from './LayoutUser';

const UserPage = async ({ params }: { params: { user: string } }) => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['user', params.user],
		queryFn: () => getUserData(parseInt(params.user))
	});
	await queryClient.prefetchQuery({
		queryKey: ['user', params.user],
		queryFn: () => getSimilarUsers(parseInt(params.user))
	});
	const dehydratedState = dehydrate(queryClient);

	return (
		<>
			<Hydrate state={dehydratedState}>
				<main className="w-full bg-base-100 p-2 sm:p-4 md:p-8">
					<LayoutUser userId={params.user} />
				</main>
			</Hydrate>
		</>
	)
}

export default UserPage
