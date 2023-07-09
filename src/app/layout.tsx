import { ThemeSwitcher } from '@/components'
import { QueryProviders } from '@/utils/queryProvider'
//import axios from 'axios'
import { MockWorker } from '@/utils/mockWorker'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../contexts/UserContexts'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Re:Match',
	description: 'Descubra e compartilhe seus interesses o mundo!'
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<MockWorker>
				<body className={inter.className}>
					<UserContextProvider>
						<QueryProviders>
							{children}
						</QueryProviders>
						<ThemeSwitcher />
						<Toaster />
					</UserContextProvider>
				</body>
			</MockWorker>
		</html>
	)
}
