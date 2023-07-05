const baseUrl = process.env.NEXT_PUBLIC_API_URL

const apiEndpoints = {
	BASE_URL: `${baseUrl}`,
	POST_USER_LOGIN: `${baseUrl}/auth/login`,
	POST_USER_LOGOUT: `${baseUrl}/auth/logout`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar um usuário específico
	 * @example: `${GET_USER_DATA}/${user_id}`
	 * @example: GET_USER_DATA + '/' + user_id
	 */
	GET_USER_DATA: `${baseUrl}/user`,
	POST_USER_SIGN_UP: `${baseUrl}/user`,
	GET_BOOK_INDEX: `${baseUrl}/book`,
	POST_BOOK_INDEX: `${baseUrl}/book`,

	GET_PREFERENCES: `${baseUrl}/preferences`,
	MUTATE_PREFERENCES: `${baseUrl}/user/preferences`
} as const

export { apiEndpoints }

