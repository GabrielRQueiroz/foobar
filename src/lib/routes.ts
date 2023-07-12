const baseUrl = process.env.NEXT_PUBLIC_API_URL

const apiEndpoints = {
	BASE_URL: `${baseUrl}`,

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= AUTH -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	POST_USER_LOGIN: `${baseUrl}/auth/login`,
	POST_USER_LOGOUT: `${baseUrl}/auth/logout`,
	/**
	 * Essa rota deve ser acrescida de /:id para buscar um usuário específico
	 * @example: `${GET_USER_DATA}/${user_id}`
	 * @example: GET_USER_DATA + '/' + user_id
	 */
	GET_USER_DATA: `${baseUrl}/user`,
	POST_USER_SIGN_UP: `${baseUrl}/user`,

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= BOOKS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	GET_ALL_BOOK: `${baseUrl}/book`,
	POST_BOOK: `${baseUrl}/book`,
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

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= MOVIES -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	GET_ALL_MOVIE: `${baseUrl}/movie`,
	POST_MOVIE: `${baseUrl}/movie`,
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

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= SHOWS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	GET_ALL_SHOW: `${baseUrl}/show`,
	POST_SHOW: `${baseUrl}/show`,
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

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= PREFERENCES -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	GET_BOOKS_PREFERENCES: `${baseUrl}/user/match_books`,
	GET_MOVIES_PREFERENCES: `${baseUrl}/user/match_movies`,
	GET_SHOWS_PREFERENCES: `${baseUrl}/user/match_shows`,

	MUTATE_BOOKS_PREFERENCES: `${baseUrl}/user/connect_to_book`,
	MUTATE_MOVIES_PREFERENCES: `${baseUrl}/user/connect_to_movie`,
	MUTATE_SHOWS_PREFERENCES: `${baseUrl}/user/connect_to_show`,

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= USERS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	/**
	 * Essa rota deve ser acrescida de /:id para buscar usuários semelhantes a um usuário específico
	 * @example: `${GET_SIMILAR_USERS}/${user_id}`
	 * @example: GET_SIMILAR_USERS + '/' + user_id
	 */
	GET_SIMILAR_USERS: `${baseUrl}/user/get_users_by_preferences`,
} as const

export { apiEndpoints }

