import { ReactNode } from 'react'

export default function Auth({ children }: { children: ReactNode }) {
	return (<body><main className="flex h-screen w-full justify-between bg-base-100">{children}</main></body>)
}
