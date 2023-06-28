import { QueryProviders } from '@/utils/queryProvider'
import { Navbar, ThemeSwitcher } from '@/components'
//import axios from 'axios'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'RE:Match',
	description: 'Descubra e compartilhe seus interesses o mundo!'
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<QueryProviders>
					<Navbar />
					{children}
				</QueryProviders>
				<ThemeSwitcher />
			</body>
		</html>
	)
}
