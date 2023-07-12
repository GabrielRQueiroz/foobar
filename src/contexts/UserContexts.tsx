'use client'

import { apiEndpoints } from '@/lib/routes'
import { User } from '@/lib/types'
import axios, { type AxiosResponse } from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

type UserContextTypes = {
	user: User | null
	sendUserSignIn: (fields: { email: string; password: string }) => Promise<void>
	sendUserSignUp: (fields: { name: string; email: string; password: string }) => Promise<void>
	getUserInfo: (user_id: number) => Promise<AxiosResponse<User>>
	logout: () => void
}

export const UserContext = createContext({} as UserContextTypes)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserContextTypes['user']>(JSON.parse(localStorage.getItem('user') || 'false') || null)
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		const user = localStorage.getItem('user')

		if (user) {
			const user_expire_date = new Date(JSON.parse(user).exp)
			const now = new Date()

			if (user_expire_date > now) {
				setUser(JSON.parse(user))

				if (['/login', '/registro'].includes(pathname)) {
					router.push('/feed/books')
				}

				return
			}

			toast.error('Sua sessão expirou, faça login novamente.')
		}

		if (!['/login', '/registro', '/'].includes(pathname)) {
			router.push('/login')
		}
	}, [router])

	useEffect(() => {
		if (user && ['/login', '/registro'].includes(pathname)) {
			localStorage.setItem('user', JSON.stringify(user))
			router.push('/feed/books')
			return
		} else if (!user && !['/login', '/registro', '/'].includes(pathname)) {
			router.push('/login')
		}
	}, [user, router])

	const sendUserSignIn = async (fields: { email: string; password: string }) => {
		return axios.post(apiEndpoints.POST_USER_LOGIN, fields).then(res => {
			setUser(res.data)
			localStorage.setItem('user', JSON.stringify(res.data))
		})
	}

	const sendUserSignUp = async (fields: { name?: string; email: string; password: string }) => {
		return axios.post(apiEndpoints.POST_USER_SIGN_UP, fields).then(() => {
			delete fields.name

			axios.post(apiEndpoints.POST_USER_LOGIN, fields).then(res => {
				setUser(res.data)
				localStorage.setItem('user', JSON.stringify(res.data))
			})
		})
	}

	const getUserInfo = async (user_id: number) => {
		return axios.get(`${apiEndpoints.GET_USER_DATA}/${user_id}`).then(res => res.data)
	}

	const logout = () => {
		setUser(null)

		toast.success('Você saiu da sua conta.')
	}

	return (
		<>
			<UserContext.Provider value={{ sendUserSignIn, sendUserSignUp, logout, user, getUserInfo }}>
				{children}
			</UserContext.Provider>
		</>
	)
}
