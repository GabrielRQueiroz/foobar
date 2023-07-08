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

	GET_BOOK_ALL: `${baseUrl}/book`,
	POST_BOOK_ALL: `${baseUrl}/book`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar um livro específico
	 * @example: `${GET_BOOK_DATA}/${book_id}`
	 * @example: GET_BOOK_DATA + '/' + book_id
	 */
	GET_BOOK_DATA: `${baseUrl}/book`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar uma série específica
	 * @example: `${PUT_BOOK_DATA}/${show_id}`
	 * @example: PUT_BOOK_DATA + '/' + show_id
	 */
	PUT_BOOK_DATA: `${baseUrl}/book`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar uma série específica
	 * @example: `${DELETE_BOOK_DATA}/${show_id}`
	 * @example: DELETE_BOOK_DATA + '/' + show_id
	 */
	DELETE_BOOK_DATA: `${baseUrl}/book`,

	GET_MOVIE_ALL: `${baseUrl}/movie`,
	POST_MOVIE_ALL: `${baseUrl}/movie`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar um filme específico
	 * @example: `${GET_MOVIE_DATA}/${movie_id}`
	 * @example: GET_MOVIE_DATA + '/' + movie_id
	 */
	GET_MOVIE_DATA: `${baseUrl}/movie`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar uma série específica
	 * @example: `${PUT_MOVIE_DATA}/${show_id}`
	 * @example: PUT_MOVIE_DATA + '/' + show_id
	 */
	PUT_MOVIE_DATA: `${baseUrl}/movie`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar uma série específica
	 * @example: `${DELETE_MOVIE_DATA}/${show_id}`
	 * @example: DELETE_MOVIE_DATA + '/' + show_id
	 */
	DELETE_MOVIE_DATA: `${baseUrl}/movie`,

	GET_SHOW_ALL: `${baseUrl}/show`,
	POST_SHOW_ALL: `${baseUrl}/show`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar uma série específica
	 * @example: `${GET_SHOW_DATA}/${show_id}`
	 * @example: GET_SHOW_DATA + '/' + show_id
	 */
	GET_SHOW_DATA: `${baseUrl}/show`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar uma série específica
	 * @example: `${PUT_SHOW_DATA}/${show_id}`
	 * @example: PUT_SHOW_DATA + '/' + show_id
	 */
	PUT_SHOW_DATA: `${baseUrl}/show`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar uma série específica
	 * @example: `${DELETE_SHOW_DATA}/${show_id}`
	 * @example: DELETE_SHOW_DATA + '/' + show_id
	 */
	DELETE_SHOW_DATA: `${baseUrl}/show`,

	GET_PREFERENCES: `${baseUrl}/preferences`,
	MUTATE_PREFERENCES: `${baseUrl}/user/preferences`
} as const

export { apiEndpoints }

