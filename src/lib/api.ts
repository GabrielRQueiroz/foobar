
import axios, { AxiosError } from 'axios'
import { apiEndpoints } from './routes'
import { User } from './types'

export const getPreferences = async () => {
	try {
		const response = await axios.get(apiEndpoints.GET_PREFERENCES)

		return response.data
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.message)
		}
	}
}

export const updatePreferences = async (selectedPreferences: any[]) => {
	const response = await axios.post(apiEndpoints.MUTATE_BOOKS_PREFERENCES, selectedPreferences)

	return response.data
}

export const getFeed = async () => {
	const {data: feedData} = await axios.get(apiEndpoints.GET_PREFERENCES)

	return feedData
}

export const getUserData = async (user_id: User["user_id"]) => {
	const {data: userData} = await axios.get(`${apiEndpoints.GET_USER_DATA}/${user_id}`)

	return userData
}