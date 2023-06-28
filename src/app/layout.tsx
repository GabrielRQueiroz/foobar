'use client'

import { Navbar, ThemeSwitcher } from '@/components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()
axios.defaults.baseURL = 'http://localhost:3000/api'

export const metadata = {
	title: 'RE:Match',
	description: 'Descubra e compartilhe seus interesses o mundo!'
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<QueryClientProvider client={queryClient}>
				<body className={inter.className}>
					<Navbar />
					{children}
					<ThemeSwitcher />
				</body>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</html>
	)
}
