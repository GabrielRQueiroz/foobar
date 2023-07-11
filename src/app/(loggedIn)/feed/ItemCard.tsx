'use client'

import { useAuth } from '@/hooks/useAuth'
import { updateBookPreferences } from '@/lib/api'
import { ThumbsUp } from '@phosphor-icons/react'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'

export const ItemCard = ({ suggestion, onMatch }: { suggestion: any; onMatch: () => void }) => {
	const { user } = useAuth()
	const { mutate } = useMutation({
		mutationKey: ['preference_update', 'books'],
		mutationFn: updateBookPreferences
	})

	return (
		<div data-cy="feed-card" className="card card-compact max-w-xs text-base-content shadow">
			<figure className="pointer-events-none relative aspect-square w-full">
				<Image
					data-cy="feed-card-image"
					fill
					alt={suggestion.name}
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
