import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '@bat-ui/ui'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'ghost', 'outline', 'link']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'info', 'warn']
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg']
    },
    rounded: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    <Button
      {...args}
      variant='solid'
      color='primary'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='outline'
      color='primary'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='ghost'
      color='primary'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='link'
      color='primary'
    >
      Solid
    </Button>
  </div>
)
export const SecondaryVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    <Button
      {...args}
      variant='solid'
      color='secondary'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='outline'
      color='secondary'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='ghost'
      color='secondary'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='link'
      color='secondary'
    >
      Solid
    </Button>
  </div>
)
export const SuccessVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    <Button
      {...args}
      variant='solid'
      color='success'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='outline'
      color='success'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='ghost'
      color='success'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='link'
      color='success'
    >
      Solid
    </Button>
  </div>
)
export const DangerVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    <Button
      {...args}
      variant='solid'
      color='danger'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='outline'
      color='danger'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='ghost'
      color='danger'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='link'
      color='danger'
    >
      Solid
    </Button>
  </div>
)

export const InfoVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    <Button
      {...args}
      variant='solid'
      color='info'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='outline'
      color='info'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='ghost'
      color='info'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='link'
      color='info'
    >
      Solid
    </Button>
  </div>
)
export const WarnVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    <Button
      {...args}
      variant='solid'
      color='warn'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='outline'
      color='warn'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='ghost'
      color='warn'
    >
      Solid
    </Button>
    <Button
      {...args}
      variant='link'
      color='warn'
    >
      Solid
    </Button>
  </div>
)
