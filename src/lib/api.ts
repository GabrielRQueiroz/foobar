
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

export const deleteItem = async (
	fields: {
		userAuth: User['auth_token'] | undefined
		Id: Book['id'] | Movie['id'] | Show['id']
	},
	category: 'Livros' | 'Filmes' | 'Series'
) => {
	if (!fields.userAuth) return

	let url
	switch (category) {
		case 'Livros':
			url = `${apiEndpoints.DELETE_BOOK_DATA}/${fields.Id}`
			break
		case 'Filmes':
			url = `${apiEndpoints.DELETE_MOVIE_DATA}/${fields.Id}`
			break
		case 'Series':
			url = `${apiEndpoints.DELETE_SHOW_DATA}/${fields.Id}`
			break
		default:
			url = apiEndpoints.POST_BOOK
	}

	const response = await axios.delete(url, {
		headers: {
			Authorization: `${fields.userAuth}`
		}
	})

	toast.success('DELETADO')

	return response.data
}

export const updatePrefence = async (
	fields: {
		userId: User['user_id'] | undefined
		preferenceId: Book['id'] | Movie['id'] | Show['id']
	},
	category: 'BOOKS' | 'MOVIES' | 'SHOWS'
) => {
	if (!fields.userId) return

	let url

	switch (category) {
		case 'BOOKS':
			url = apiEndpoints.MUTATE_BOOKS_PREFERENCES
			break
		case 'MOVIES':
			url = apiEndpoints.MUTATE_MOVIES_PREFERENCES
			break
		case 'SHOWS':
			url = apiEndpoints.MUTATE_SHOWS_PREFERENCES
			break
		default:
			url = apiEndpoints.MUTATE_BOOKS_PREFERENCES
			break
	}

	const response = await axios.post(
		url,
		(category === 'BOOKS' && {
			book_id: `${fields.preferenceId}`,
			user_id: `${fields.userId}`
		}) ||
			(category === 'MOVIES' && {
				movie_id: `${fields.preferenceId}`,
				user_id: `${fields.userId}`
			}) ||
			(category === 'SHOWS' && {
				show_id: `${fields.preferenceId}`,
				user_id: `${fields.userId}`
			})
	)

	toast.success('MATCH!')

	return response.data
}

export const getFeed = async (user_id: number | undefined, category: 'BOOKS' | 'MOVIES' | 'SHOWS') => {
	if (!user_id) return

	let url

	switch (category) {
		case 'BOOKS':
			url = apiEndpoints.GET_BOOKS_PREFERENCES
			break
		case 'MOVIES':
			url = apiEndpoints.GET_MOVIES_PREFERENCES
			break
		case 'SHOWS':
			url = apiEndpoints.GET_SHOWS_PREFERENCES
			break
		default:
			url = apiEndpoints.GET_BOOKS_PREFERENCES
			break
	}

	const feedData = await axios
		.get(url, {
			params: {
				user_id: `${user_id}`
			}
		})
		.then(res => res.data)

	if (feedData.length <= 1) {
		return feedData
	}

	const orderedData = feedData[category.toLowerCase()].sort((a: any, b: any) => b.match - a.match)

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

export const getAllMovies = async (auth_token: string | undefined) => {
	const { data: moviesData } = await axios.get(apiEndpoints.GET_ALL_MOVIE, {
		headers: {
			Authorization: `${auth_token}`
		}
	})

	return moviesData
}

export const getAllShows = async (auth_token: string | undefined) => {
	const { data: showsData } = await axios.get(apiEndpoints.GET_ALL_SHOW, {
		headers: {
			Authorization: `${auth_token}`
		}
	})

	return showsData
}

export const getUserData = async (user_id: User['user_id'] | undefined) => {
	if (!user_id) return
	const { data: allUsersData } = await axios.get(`${apiEndpoints.GET_USER_DATA}/preference`)

	const userData = allUsersData.filter((user: any) => user.user_id === user_id)

	return userData
}

export const getSimilarUsers = async (user_id: User['user_id'] | undefined) => {
	if (!user_id) return
	const { data: allUsersData } = await axios.get(`${apiEndpoints.GET_SIMILAR_USERS}/${user_id}`)

	const orderedData: any[] = allUsersData.users.sort((a: any, b: any) => b.match - a.match)
	
	return orderedData
}