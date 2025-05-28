import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitch } from './theme-switch'

const meta: Meta<typeof ThemeSwitch> = {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
}
export default meta

type Story = StoryObj<typeof ThemeSwitch>

export const Default: Story = {}
