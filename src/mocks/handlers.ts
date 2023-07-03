import { apiEndpoints } from '@/lib/api'
import { rest } from 'msw'

export const handlers = [
	rest.get(apiEndpoints.GET_ONBOARD_PREFERENCES, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: '1',
					title: 'First Preference',
					description: 'First Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '2',
					title: 'Second Preference',
					description: 'Second Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '3',
					title: 'Third Preference',
					description: 'Third Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '4',
					title: 'Fourth Preference',
					description: 'Fourth Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '5',
					title: 'Fifth Preference',
					description: 'Fifth Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '6',
					title: 'Sixth Preference',
					description: 'Sixth Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '7',
					title: 'Seventh Preference',
					description: 'Seventh Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '8',
					title: 'Eighth Preference',
					description: 'Eighth Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '9',
					title: 'Ninth Preference',
					description: 'Ninth Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '10',
					title: 'Tenth Preference',
					description: 'Tenth Preference Description',
					image: 'https://picsum.photos/200/300',
					selected: false
				},
				{
					id: '11',
					title: 'Eleventh Preference',
					description: 'Eleventh Preference Description',
					image: 'https://picsum.photos/200/300'
				}
			] as any[])
		)
	})
]
