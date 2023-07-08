'use client'

import { getFeed } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import Image from 'next/image'

export const FeedInfiniteList = () => {
	const { data: feedData } = useQuery({
		queryKey: ['feed'],
		queryFn: getFeed
	})

	return (
		<div>
			{feedData ? (
				<div className="grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
					{feedData.map((suggestion: any, index: number) => (
						<div
							data-cy="feed-card"
							className="card-compact card max-w-xs bg-transparent"
							key={`${suggestion.id}-${suggestion.title}-${index}`}
						>
							<figure className="relative aspect-square w-full">
								<Image
									data-cy="feed-card-image"
									fill
									alt={suggestion.title}
									src={`https://picsum.photos/seed/${suggestion.title}-${index}/200`}
								/>
							</figure>
							<div className="card-body">
                <p className="badge badge-primary">
                  {suggestion.type}
                </p>
								<h5 className="card-title text-sm">{suggestion.title}</h5>
							</div>
						</div>
					))}
				</div>
			) : (
				''
			)}
		</div>
	)
}
