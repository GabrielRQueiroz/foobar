import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from '@/components'

export default {
	component: ThemeSwitcher,
	tags: ['autodocs']
} as Meta<typeof ThemeSwitcher>

type Story = StoryObj<typeof ThemeSwitcher>

export const Primary: Story = {}
