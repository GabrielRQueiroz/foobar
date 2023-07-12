import { getFeed } from '@/lib/api';
import { getQueryClient } from "@/utils/getQueryClient";
import { Hydrate } from "@/utils/hydrateClient";
import { dehydrate } from "@tanstack/query-core";
import { PreferencesList } from './PreferencesList';

export default async function OnBoardMenu() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['onboarding', 'movies'],
		queryFn: (userId: any) => getFeed(userId, 'MOVIES')
	});
	const dehydratedState = dehydrate(queryClient);
	
	return (
		<Hydrate state={dehydratedState}>
			<PreferencesList />
		</Hydrate>
	)
}
