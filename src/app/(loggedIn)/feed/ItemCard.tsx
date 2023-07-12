'use client'

import { useAuth } from '@/hooks/useAuth'
import { updatePrefence } from '@/lib/api'
import { ThumbsUp } from '@phosphor-icons/react'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'

export const ItemCard = ({
	suggestion,
	onMatch,
	category
}: {
	suggestion: any
	onMatch: () => void
	category: 'BOOKS' | 'MOVIES' | 'SHOWS'
}) => {
	const { user } = useAuth()
	const { mutate } = useMutation({
		mutationKey: ['preference_update', 'books'],
		mutationFn: (fields: any) => updatePrefence(fields, category)
	})

	return (
		<div data-cy="feed-card" className="card-compact card relative w-full max-w-xs text-base-content shadow">
			{Math.fround(suggestion.match) > 0.75 && (
				<div className="tooltip tooltip-left absolute right-4 top-4 z-40 text-2xl" data-tip="Bom match!">
					<p className="pointer-events-none">🔥</p>
					<p className="-z-10 pointer-events-none absolute opacity-80 top-0 right-0 animate-[ping_1.5s_ease-out_infinite]">🔥</p>
				</div>
			)}
			<figure className="pointer-events-none relative aspect-square w-full overflow-hidden rounded-xl">
				<Image
					data-cy="feed-card-image"
					fill
					alt={suggestion.name}
					sizes={'200px'}
					src={`https://picsum.photos/seed/${suggestion.id}/200`}
				/>
			</figure>
			<div className="card-body">
				<div className="flex items-start justify-end gap-4">
					{/* <p className="badge badge-md badge-neutral max-w-fit">{suggestion.type}</p> */}
					<h5 className="card-title text-sm">{suggestion.name}</h5>
					<button
						title="Match!"
						type="button"
						className="btn-ghost btn-sm btn-circle btn ml-auto text-base-content"
						onClick={e => {
							e.preventDefault()
							mutate({
								userId: user?.user_id,
								preferenceId: suggestion.id
							})
							onMatch()
						}}
					>
						<ThumbsUp size={24} />
					</button>
				</div>
			</div>
		</div>
	)
}
