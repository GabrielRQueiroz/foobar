import { getFeed } from "@/lib/api";
import { getQueryClient } from "@/utils/getQueryClient";
import { Hydrate } from "@/utils/hydrateClient";
import { dehydrate } from "@tanstack/react-query";
import { FeedInfiniteList } from "./FeedInfiniteList";

export default async function Feed() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['feed', 'movies'],
		queryFn: (userId: any) => getFeed(userId, "MOVIES")
	})
	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<FeedInfiniteList />
		</Hydrate>
	)
}