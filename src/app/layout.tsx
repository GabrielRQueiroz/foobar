import { Navbar, ThemeSwitcher } from '@/components'
import { QueryProviders } from '@/utils/queryProvider'
//import axios from 'axios'
import { MockWorker } from '@/utils/mockWorker'
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
			<MockWorker>
				<body className={inter.className}>
					<QueryProviders>
						<Navbar />
						{children}
					</QueryProviders>
					<ThemeSwitcher />
				</body>
			</MockWorker>
		</html>
	)
}
