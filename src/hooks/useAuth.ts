'use client'

import { UserContext } from '@/contexts/UserContexts'
import { useContext } from 'react'

export const useAuth = () => {
	const userUtils = useContext(UserContext)
	return { ...userUtils }
}
