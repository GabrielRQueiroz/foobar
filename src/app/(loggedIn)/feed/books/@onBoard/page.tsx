import { getAllBooks } from '@/lib/api';
import { getQueryClient } from "@/utils/getQueryClient";
import { Hydrate } from "@/utils/hydrateClient";
import { dehydrate } from "@tanstack/query-core";
import { PreferencesList } from './PreferencesList';

export default async function OnBoardMenu() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["onboarding", "books"], getAllBooks);
	const dehydratedState = dehydrate(queryClient);
	
	return (
		<Hydrate state={dehydratedState}>
			<PreferencesList />
		</Hydrate>
	)
}
