'use client'

import { useAuth } from '@/hooks/useAuth'
import { deleteBook } from '@/lib/api'
import { Trash } from '@phosphor-icons/react'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'

export const ItemCardAdmin = ({ nameBooks, onDelete }: { nameBooks: any; onDelete: () => void }) => {
	const { user } = useAuth()
	const { mutate } = useMutation({
		mutationKey: ['preference_update', 'books'],
		mutationFn: deleteBook
	})

	return (
		<div data-cy="feed-card" className="card card-compact max-w-xs text-base-content shadow">
			<figure className="pointer-events-none relative aspect-square w-full">
				<Image
					data-cy="feed-card-image"
					fill
					alt={nameBooks.name}
					src={`https://picsum.photos/seed/${nameBooks.id}/200`}
				/>
			</figure>
			<div className="card-body">
				<div className="flex items-start justify-end gap-4">
					{/* <p className="badge badge-md badge-neutral max-w-fit">{nameBooks.type}</p> */}
					<h5 className="card-title text-sm">{nameBooks.name}</h5>
					<button
						title="Match!"
						type="button"
						className="btn-ghost btn-sm btn-circle btn ml-auto text-base-content"
						onClick={e => {
							e.preventDefault()
							mutate({
                                userAuth: user?.auth_token,
								bookId: nameBooks.id
							})
							onDelete()
						}}
					>
						<Trash size={24} />
					</button>
				</div>
			</div>
		</div>
	)
}
