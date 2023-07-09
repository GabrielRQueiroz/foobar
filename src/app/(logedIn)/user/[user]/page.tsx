import { Hydrate } from '@/utils/hydrateClient';
import { LayoutUser } from './LayoutUser'
import { dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/utils/getQueryClient';
import { getUserData } from '@/lib/api';

const UserPage = async ({ params }: { params: { slug: string } }) => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['user', params.slug],
		queryFn: () => getUserData(parseInt(params.slug))
	});
	const dehydratedState = dehydrate(queryClient);

	return (
		<>
			<Hydrate state={dehydratedState}>
			<div className="flex h-screen w-full border-8 bg-base-100 p-8 text-base-content">
				<LayoutUser />
				<div className=" phone-1 artboard artboard-horizontal text-base-content">teste</div>
				{/* <Image src="/background-LandingPage.jpg" width={400} height={0} alt="background" /> */}
			</div>
			</Hydrate>
		</>
	)
}

export default UserPage
