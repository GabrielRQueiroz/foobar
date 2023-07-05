import { apiEndpoints } from '@/lib/api'
import { preferencesData } from '@/mocks/constants/preferences'
import { rest } from 'msw'

export const handlers = [
	rest.get(apiEndpoints.GET_PREFERENCES, (req, res, ctx) => {
		const limit = Number(req.url.searchParams.get('limit'))

		return res(ctx.status(200), ctx.json([...preferencesData, ...preferencesData] as any[]))
	}),
	rest.post(apiEndpoints.MUTATE_PREFERENCES, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ success: true }))
	})
]
