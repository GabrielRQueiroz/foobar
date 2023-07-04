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
			localStorage.setItem('theme', 'fantasy')
			document.querySelector('html')?.setAttribute('data-theme', 'fantasy')
		} else {
			localStorage.setItem('theme', 'dark')
			document.querySelector('html')?.setAttribute('data-theme', 'dark')
		}
	}

	return (
		<label
			data-cy="theme-switcher"
			className="swap-rotate btn-ghost btn-circle btn bottom-8 right-8 hidden text-base-content ip3:swap ip3:fixed"
		>
			<input id="theme-switcher" type="checkbox" onChange={handleThemeChange} />
			<Sun data-cy="light-theme" className="swap-off fill-current" size={32} />
			<Moon data-cy="dark-theme" className="swap-on fill-current" size={32} />
		</label>
	)
}
