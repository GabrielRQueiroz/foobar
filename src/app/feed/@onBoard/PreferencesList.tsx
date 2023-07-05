'use client'
import { apiEndpoints } from '@/lib/api'
import { Check } from '@phosphor-icons/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import toast from 'react-hot-toast'

const getPreferences = async () => {
	try {
		const response = await axios.get(apiEndpoints.GET_ONBOARD_PREFERENCES)

		return response.data
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.message)
		}
	}
}

const updatePreferences = async (selectedPreferences: any[]) => {
	const response = await axios.post(apiEndpoints.MUTATE_PREFERENCES, selectedPreferences)

	return response.data
}

export const PreferencesList = () => {
	const { data: preferences, isLoading } = useQuery({
		queryKey: ['onboarding'],
		queryFn: getPreferences
	})
	const {
		mutate,
		isLoading: mutationIsLoading,
		isSuccess: mutationIsSuccess,
		isError: mutationIsError
	} = useMutation({ mutationFn: updatePreferences })
	const [selectedPreferences, setSelectedPreferences] = useState<string[]>([])

	const handlePreferenceSelection = async (preferenceId: string) => {
		const newSelectionList = selectedPreferences.includes(preferenceId)
			? selectedPreferences.filter(id => id !== preferenceId)
			: [...selectedPreferences, preferenceId]

		setSelectedPreferences(newSelectionList)
	}

	const closeModal = () => {
		const onBoardingMenu = document.getElementById('onboarding-menu') as HTMLDialogElement
		setSelectedPreferences([])
		onBoardingMenu.className = 'modal'
	}

	const handlePreferencesSubmit = async () => {
		mutate(selectedPreferences)

		if (mutationIsSuccess) {
			toast.success('Suas preferências foram salvas 😉')
		} else if (mutationIsError) {
			toast.error('Ocorreu um erro ao salvar suas preferências 😢')
		}

		closeModal()
	}

	return (
		<>
			<div
				data-cy="preferences-list"
				className="flex w-full flex-wrap items-center justify-center gap-8 bg-transparent p-6"
			>
				{isLoading ? (
					<span className="loading-spinner mx-auto h-6 w-6" />
				) : (
					preferences?.map((preference: any, index: number) => (
						<button
							disabled={mutationIsLoading || mutationIsSuccess}
							onClick={e => {
								e.preventDefault()
								handlePreferenceSelection(preference.id)
							}}
							className="indicator aspect-square flex-1 basis-1/3 md:basis-1/5"
							key={`${preference.id + index}-${preference.title}`}
						>
							<span
								data-cy="preference-card-checked"
								className={clsx(
									'badge badge-secondary badge-sm indicator-item z-20',
									selectedPreferences.includes(preference.id) ? 'visible' : 'invisible'
								)}
							>
								<Check size={16} />
							</span>
							<div
								data-cy="preference-card"
								className={clsx(
									'card-compact card image-full h-full w-full shadow-xl',
									selectedPreferences.includes(preference.id) && 'border border-primary'
								)}
							>
								<figure className="relative">
									<div className="bg-black-900 absolute left-0 top-0 h-full w-full opacity-50" />
									<Image fill className="object-cover" src={preference.image} alt="Shoes" />
								</figure>
								<div className="card-body">
									<h2 className="card-title">{preference.title}</h2>
									<p>{preference.id}</p>
								</div>
							</div>
						</button>
					))
				)}
			</div>
			<div className="modal-action sticky bottom-0 z-30 bg-base-100 p-6">
				<button
					disabled={mutationIsLoading || mutationIsSuccess}
					onClick={() => closeModal()}
					className="btn-ghost btn"
				>
					Pular
				</button>
				<button
					type="submit"
					data-cy='submit-btn'
					disabled={mutationIsLoading || mutationIsSuccess || selectedPreferences.length === 0}
					onClick={handlePreferencesSubmit}
					className="btn-primary btn"
				>
					Continuar
				</button>
			</div>
		</>
	)
}
