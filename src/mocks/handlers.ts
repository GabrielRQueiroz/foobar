import { rest } from 'msw'
import { apiEndpoints } from '../lib/routes'
import { preferencesData } from './constants/preferences'

export const handlers = [
	// rest.get(apiEndpoints.GET_BOOKS_PREFERENCES, (req, res, ctx) => {
	// 	// const limit = Number(req.url.searchParams.get('limit'))
		
	// 	return res(ctx.status(200), ctx.json({
	// 		books: [
	// 			...preferencesData.books,
	// 			...preferencesData.books,
	// 			...preferencesData.books,
	// 			...preferencesData.books,
	// 		]
	// 	}))
	// }),
	rest.get(apiEndpoints.GET_MOVIES_PREFERENCES, (req, res, ctx) => {
		// const limit = Number(req.url.searchParams.get('limit'))
		
		return res(ctx.status(200), ctx.json({
			movies: [
				...preferencesData.books,
				...preferencesData.books,
				...preferencesData.books,
				...preferencesData.books,
			]
		}))
	}),
	rest.get(apiEndpoints.GET_SHOWS_PREFERENCES, (req, res, ctx) => {
		// const limit = Number(req.url.searchParams.get('limit'))
		
		return res(ctx.status(200), ctx.json({
			shows: [
				...preferencesData.books,
				...preferencesData.books,
				...preferencesData.books,
				...preferencesData.books,
			]
		}))
	}),
	rest.get(apiEndpoints.GET_ALL_BOOK, (req, res, ctx) => {
		// const limit = Number(req.url.searchParams.get('limit'))
		let bookList = []
		
		for (let [book, match] of Object.entries(preferencesData.books)) {
		bookList.push({
			id: book,
			match: match
		})
	}

		return res(ctx.status(200), ctx.json(bookList as any[]))
	}),
	rest.get(apiEndpoints.GET_ALL_MOVIE, (req, res, ctx) => {
		// const limit = Number(req.url.searchParams.get('limit'))
		let bookList = []
		
		for (let [book, match] of Object.entries(preferencesData.books)) {
		bookList.push({
			id: book,
			match: match
		})
	}

		return res(ctx.status(200), ctx.json(bookList as any[]))
	}),
	rest.get(apiEndpoints.GET_ALL_SHOW, (req, res, ctx) => {
		// const limit = Number(req.url.searchParams.get('limit'))
		let bookList = []
		
		for (let [book, match] of Object.entries(preferencesData.books)) {
		bookList.push({
			id: book,
			match: match
		})
	}

		return res(ctx.status(200), ctx.json(bookList as any[]))
	}),
	// rest.post(apiEndpoints.MUTATE_BOOKS_PREFERENCES, (req, res, ctx) => {
	// 	return res(ctx.status(200), ctx.json({ success: true }))
	// }),
	rest.post(apiEndpoints.MUTATE_MOVIES_PREFERENCES, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ success: true }))
	}),
	rest.post(apiEndpoints.MUTATE_SHOWS_PREFERENCES, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ success: true }))
	})
]
