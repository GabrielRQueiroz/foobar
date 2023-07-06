//import { Patrick_Hand } from 'next/font/google'
import { ReactNode } from 'react'
//import clsx from 'clsx'
//import axios from "axios"


export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<main className='flex h-screen w-full justify-between bg-base-100'>{children}</main>
	)
}
