import { getFeed } from "@/lib/api";
import { getQueryClient } from "@/utils/getQueryClient";
import { Hydrate } from "@/utils/hydrateClient";
import { dehydrate } from "@tanstack/react-query";
import { FeedInfiniteList } from "./FeedInfiniteList";

export default async function Feed() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['feed'],
		queryFn: getFeed
	});
	const dehydratedState = dehydrate(queryClient);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-base-100 text-base-content p-2 sm:p-6 md:p-12 lg:p-24">
			<Hydrate state={dehydratedState}>
				<FeedInfiniteList />
			</Hydrate>
		</main>
	)
}