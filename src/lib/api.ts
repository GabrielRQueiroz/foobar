
import axios, { AxiosError } from 'axios'
import { apiEndpoints } from './routes'

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
	const response = await axios.post(apiEndpoints.MUTATE_PREFERENCES, selectedPreferences)

	return response.data
}

export const getFeed = async () => {
	const {data: feedData} = await axios.get(apiEndpoints.GET_PREFERENCES)

	return feedData
}