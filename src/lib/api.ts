
import axios from 'axios'
import toast from 'react-hot-toast'
import { apiEndpoints } from './routes'
import { Book, Movie, Show, User } from './types'

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

export const getAllBooks = async () => {
	const {data: booksData} = await axios.get(apiEndpoints.GET_ALL_BOOK)

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
	const {data: userData} = await axios.get(`${apiEndpoints.GET_USER_DATA}/${user_id}`)

	return userData
}