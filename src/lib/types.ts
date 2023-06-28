export type User = {
	id: number
	name: string
	email: string
	password: string
	created_at: string
	isAdmin: boolean
}

export type Tag = {
	id: number
	name: string
}

export type Movie = {
	id: number
	name: string
}

export type MovieTag = {
	movie_id: number
	tag_id: number
}

export type UserMovie = {
	user_id: number
	movie_id: number
}

export type Book = {
	id: number
	name: string
}

export type BookTag = {
	book_id: number
	tag_id: number
}

export type UserBook = {
	user_id: number
	book_id: number
}

export type Show = {
	id: number
	name: string
}

export type Group = {
	id: number
}

export type UserGroup = {
	user_id: number
	group_id: number
}

export type ShowTag = {
	show_id: number
	tag_id: number
}

export type UserShow = {
	user_id: number
	show_id: number
}
