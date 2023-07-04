const baseUrl = process.env.NEXT_PUBLIC_API_URL

const apiEndpoints = {
	BASE_URL: `${baseUrl}`,
	GET_ALL_PREFERENCES: `${baseUrl}/preferences`,
	GET_ONBOARD_PREFERENCES: `${baseUrl}/preferences?limit=32`,
	GET_USER: `${baseUrl}/user`,
	MUTATE_PREFERENCES: `${baseUrl}/user/preferences`,
	POST_USER_LOGIN: `${baseUrl}/auth/login`,
	POST_USER_SIGN_UP: `${baseUrl}/user`,
} as const

export { apiEndpoints }

