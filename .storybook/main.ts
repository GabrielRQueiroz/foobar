import type { StorybookConfig } from '@storybook/nextjs'

const path = require('path')

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-styling'
	],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	staticDirs: ['../public'],
	webpackFinal: async config => {
		config = {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					'@': path.resolve(__dirname, '../src'),
					...config?.resolve?.alias,
				}
			}
		}

		return config
	}
}
export default config
