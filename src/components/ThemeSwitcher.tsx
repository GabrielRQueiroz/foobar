'use client'
import { Moon, Sun } from '@phosphor-icons/react'
import { ChangeEvent, useEffect } from 'react'

export const ThemeSwitcher = () => {
	useEffect(() => {
		const theme = localStorage.getItem('theme')
		if (theme) {
			document.querySelector('html')?.setAttribute('data-theme', theme)
			if (theme === 'fantasy') {
				;(document.querySelector('#theme-switcher') as HTMLInputElement).checked = true
			}
		} else {
			localStorage.setItem('theme', 'fantasy')
			document.querySelector('html')?.setAttribute('data-theme', 'fantasy')
			;(document.querySelector('#theme-switcher') as HTMLInputElement).checked = true
		}
	}, [])

	const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			typeof window !== 'undefined' && localStorage.setItem('theme', 'fantasy')
			document.querySelector('html')?.setAttribute('data-theme', 'fantasy')
		} else {
			typeof window !== 'undefined' && localStorage.setItem('theme', 'dark')
			document.querySelector('html')?.setAttribute('data-theme', 'dark')
		}
	}

	return (
		<label
			data-cy="theme-switcher"
			className="swap-rotate btn-base-300 btn-circle btn top-2 left-8 z-[55] bottom-auto right-auto sm:left-auto sm:top-auto sm:bottom-8 sm:right-8 hidden text-base-content ip3:swap ip3:fixed"
		>
			<input id="theme-switcher" type="checkbox" onChange={handleThemeChange} />
			<Sun data-cy="light-theme" className="swap-off fill-current" size={32} />
			<Moon data-cy="dark-theme" className="swap-on fill-current" size={32} />
		</label>
	)
}
