import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Main page',
  component: Main,
  argTypes: {
    fontSize: { control: 'range' }
  }
} as Meta

export const MainPage: Story = (args) => <Main {...args} />

export const secondPage: Story = (args) => <Main {...args} />
