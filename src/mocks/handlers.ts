import { apiEndpoints } from '@/lib/api'
import { rest } from 'msw'
import { preferencesData } from '@/mocks/constants/preferences'

export const handlers = [
	rest.get(apiEndpoints.GET_ONBOARD_PREFERENCES, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([...preferencesData, ...preferencesData] as any[])
		)
	}),
	rest.post(apiEndpoints.MUTATE_PREFERENCES, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({ success: true })
		)
	}),
]
