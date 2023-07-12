
import axios from 'axios'
import toast from 'react-hot-toast'
import { apiEndpoints } from './routes'
import { Book, Movie, Show, User } from './types'

export const createItem = async (
	userAuth: User['auth_token'] | undefined,
	fields: {
		name: Book['name'] | Movie['name'] | Show['name']
		author: Book['author'] | Movie['author'] | Show['author']
		year: Book['year'] | Movie['year'] | Show['year']
		tag_name: Book['tag_name'] | Movie['tag_name'] | Show['tag_name']
	},
	category: 'Livros' | 'Filmes' | 'Series'
) => {
	if (!userAuth) return

	let url

	switch (category) {
		case 'Livros':
			url = apiEndpoints.POST_BOOK
			break
		case 'Filmes':
			url = apiEndpoints.POST_MOVIE
			break
		case 'Series':
			url = apiEndpoints.POST_SHOW
			break
		default:
			url = apiEndpoints.POST_BOOK
	}

	const response = await axios.post(
		url,
		(category === 'Livros' && {
			name: `${fields.name}`,
			author: `${fields.author}`,
			year: `${fields.year}`,
			tag_name: `${fields.tag_name}`,
			npage: 100
		}) ||
			(category === 'Filmes' && {
				name: `${fields.name}`,
				director: `${fields.author}`,
				year: `${fields.year}`,
				tag_name: `${fields.tag_name}`
			}) ||
			(category === 'Series' && {
				name: `${fields.name}`,
				director: `${fields.author}`,
				year: `${fields.year}`,
				tag_name: `${fields.tag_name}`
			}),
		{
			headers: {
				Authorization: `${userAuth}`
			}
		}
	)
	return response.data
}

export const deleteBook = async (fields: { userAuth: User['auth_token'] | undefined; bookId: Book['id'] }) => {
	const response = await axios.delete(`${apiEndpoints.DELETE_BOOK_DATA}/${fields.bookId}`, {
		headers: {
			Authorization: `${fields.userAuth}`
		}
	})

	toast.success('DELETADO')

	return response.data
}

export const updateBookPreferences = async (fields: {
	userId: User['user_id'] | undefined
	preferenceId: Book['id']
}) => {
	if (!fields.userId) return
	const response = await axios.post(apiEndpoints.MUTATE_BOOKS_PREFERENCES, {
		book_id: `${fields.preferenceId}`,
		user_id: `${fields.userId}`
	})

	toast.success('MATCH!')

	return response.data
}

export const updateMoviePreferences = async (fields: {
	userId: User['user_id'] | undefined
	preferenceId: Movie['id']
}) => {
	if (!fields.userId) return
	const response = await axios.post(apiEndpoints.MUTATE_MOVIES_PREFERENCES, {
		movie_id: `${fields.preferenceId}`,
		user_id: `${fields.userId}`
	})

	toast.success('MATCH!')

	return response.data
}

export const updateShowPreferences = async (fields: {
	userId: User['user_id'] | undefined
	preferenceId: Show['id']
}) => {
	if (!fields.userId) return
	const response = await axios.post(apiEndpoints.MUTATE_SHOWS_PREFERENCES, {
		show_id: `${fields.preferenceId}`,
		user_id: `${fields.userId}`
	})

	toast.success('MATCH!')

	return response.data
}

export const getBookFeed = async (user_id: number | undefined) => {
	if (!user_id) return
	const { data: feedData } = await axios.get(apiEndpoints.GET_BOOKS_PREFERENCES, {
		params: {
			user_id: `${user_id}`
		}
	})

	const orderedData = feedData.books.sort((a: any, b: any) => b.match - a.match)

	return orderedData
}

export const getMovieFeed = async (user_id: number | undefined) => {
	const { data: feedData } = await axios.get(apiEndpoints.GET_MOVIES_PREFERENCES, {
		params: {
			user_id: `${user_id}`
		}
	})

	const orderedData = feedData.books.sort((a: any, b: any) => b.match - a.match)

	return orderedData
}

export const getShowFeed = async (user_id: number | undefined) => {
	const { data: feedData } = await axios.get(apiEndpoints.GET_SHOWS_PREFERENCES, {
		params: {
			user_id: `${user_id}`
		}
	})

	const orderedData = feedData.books.sort((a: any, b: any) => b.match - a.match)

	return orderedData
}

export const getAllBooks = async (auth_token: string | undefined) => {
	const { data: booksData } = await axios.get(apiEndpoints.GET_ALL_BOOK, {
		headers: {
			Authorization: `${auth_token}`
		}
	})

	return booksData
}

export const getAllMovies = async () => {
	const {data: moviesData} = await axios.get(apiEndpoints.GET_ALL_MOVIE)

	return moviesData
}

export const getAllShows = async () => {
	const {data: showsData} = await axios.get(apiEndpoints.GET_ALL_SHOW)

	return showsData
}

export const getUserData = async (user_id: User["user_id"]) => {
	const {data: userData, status} = await axios.get(`${apiEndpoints.GET_USER_DATA}/${user_id}`)

	if (status !== 200) {
		localStorage.removeItem("user")
	}
	
	return userData
}