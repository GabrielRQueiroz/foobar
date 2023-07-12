
import axios from 'axios'
import toast from 'react-hot-toast'
import { apiEndpoints } from './routes'
import { Book, Movie, Show, User } from './types'

export const updatePrefence = async (fields: {
	userId: User['user_id'] | undefined
	preferenceId: Book['id'] | Movie['id'] | Show['id']
	},
	category: "BOOKS" | "MOVIES" | "SHOWS"
) => {
	if (!fields.userId) return

	let url;

	switch (category) {
		case "BOOKS":
			url = apiEndpoints.MUTATE_BOOKS_PREFERENCES
			break
		case "MOVIES":
			url = apiEndpoints.MUTATE_MOVIES_PREFERENCES
			break
		case "SHOWS":
			url = apiEndpoints.MUTATE_SHOWS_PREFERENCES
			break
		default:
			url = apiEndpoints.MUTATE_BOOKS_PREFERENCES
			break
	}

	const response = await axios.post(url, 
		category === "BOOKS" &&
			{
				book_id: `${fields.preferenceId}`,
				user_id: `${fields.userId}`
			}
		||
		category === "MOVIES" &&
			{
				movie_id: `${fields.preferenceId}`,
				user_id: `${fields.userId}`
			}
		||
		category === "SHOWS" &&
			{
				show_id: `${fields.preferenceId}`,
				user_id: `${fields.userId}`
			}
	)
	
	toast.success('MATCH!')

	return response.data
}

export const getFeed = async (user_id: number|undefined, category: "BOOKS"|"MOVIES"|"SHOWS") => {
	if (!user_id) return
	
	let url

	switch (category) {
		case "BOOKS":
			url = apiEndpoints.GET_BOOKS_PREFERENCES
			break
		case "MOVIES":
			url = apiEndpoints.GET_MOVIES_PREFERENCES
			break
		case "SHOWS":
			url = apiEndpoints.GET_SHOWS_PREFERENCES
			break
		default:
			url = apiEndpoints.GET_BOOKS_PREFERENCES
			break
	}

	const feedData = await axios.get(url, {
		params: {
			user_id: `${user_id}`
		}
	}).then((res)=> res.data)

	if (feedData.length <= 1) {
		return feedData
	}

	const orderedData = feedData[category.toLowerCase()].sort((a: any, b: any) => b.match - a.match)

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
	const {data: userData, status} = await axios.get(`${apiEndpoints.GET_USER_DATA}/${user_id}`)

	if (status !== 200) {
		localStorage.removeItem("user")
	}
	
	return userData
}