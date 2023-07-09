import { rest } from 'msw'
import { apiEndpoints } from '../lib/routes'
import { preferencesData } from './constants/preferences'

export const handlers = [
	rest.get(apiEndpoints.GET_PREFERENCES, (req, res, ctx) => {
		// const limit = Number(req.url.searchParams.get('limit'))

		return res(ctx.status(200), ctx.json([...preferencesData, ...preferencesData] as any[]))
	}),
	rest.post(apiEndpoints.MUTATE_BOOKS_PREFERENCES, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ success: true }))
	}),
	rest.post(apiEndpoints.MUTATE_MOVIES_PREFERENCES, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ success: true }))
	}),
	rest.post(apiEndpoints.MUTATE_SHOWS_PREFERENCES, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ success: true }))
	})
]
