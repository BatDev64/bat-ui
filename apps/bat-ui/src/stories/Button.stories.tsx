import type { Meta, StoryObj } from '@storybook/react'
/* import { fn } from '@storybook/test' */

import { Button } from '@bat-ui/ui'
import { Cross } from '../assets/icons/Cross'
import { Settings } from '../assets/icons/Settings'
import { Search } from '../assets/icons/Search'

const VARIANTS = ['solid', 'outline', 'flat', 'ghost', 'link']
const COLORS = ['primary', 'secondary', 'success', 'danger', 'info', 'warn']
const SIZES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
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
      options: VARIANTS
    },
    color: {
      control: 'select',
      options: COLORS
    },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    size: {
      control: 'radio',
      options: SIZES
    },
    rounded: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full']
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right', 'none']
    }
  }
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  /* args: { onClick: fn() } */
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const PrimaryVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    {VARIANTS.map((el) => {
      return (
        <Button
          key={`button-variant-${el}`}
          {...args}
          variant={el}
          color='primary'
        >
          {el}
        </Button>
      )
    })}
  </div>
)
export const SecondaryVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    {VARIANTS.map((el) => (
      <Button
        key={`button-variant-${el}`}
        {...args}
        variant={el}
        color='secondary'
      >
        {el}
      </Button>
    ))}
  </div>
)
export const SuccessVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    {VARIANTS.map((el) => (
      <Button
        key={`button-variant-${el}`}
        {...args}
        variant={el}
        color='success'
      >
        {el}
      </Button>
    ))}
  </div>
)
export const DangerVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    {VARIANTS.map((el) => (
      <Button
        key={`button-variant-${el}`}
        {...args}
        variant={el}
        color='danger'
      >
        {el}
      </Button>
    ))}
  </div>
)

export const InfoVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    {VARIANTS.map((el) => (
      <Button
        key={`button-variant-${el}`}
        {...args}
        variant={el}
        color='info'
      >
        {el}
      </Button>
    ))}
  </div>
)
export const WarnVariants = (args: Story) => (
  <div className='flex items-center gap-4'>
    {VARIANTS.map((el) => (
      <Button
        key={`button-variant-${el}`}
        {...args}
        variant={el}
        color='warn'
      >
        {el}
      </Button>
    ))}
  </div>
)

export const AsChildrenButton: Story = {
  args: {
    children: <a href='#/'>Button</a>,
    asChild: true
  }
}

export const DisabledButton: Story = {
  args: {
    children: 'Disabled',
    isDisabled: true
  }
}

export const ButtonSizes = (args: Story) => (
  <div className='flex gap-4'>
    {SIZES.map((el) => {
      return (
        <Button
          key={`button-size-${el}`}
          {...args}
          size={el}
          color='primary'
        >
          {`Button ${el}`}
        </Button>
      )
    })}
  </div>
)

export const ButtonWithIcon = (args: Story) => (
  <div className='flex items-start justify-center gap-4'>
    <div className='flex items-start justify-center gap-4 flex-col'>
      <Button
        {...args}
        iconPosition='left'
        color='primary'
      >
        <Cross /> Close
      </Button>
      <Button
        {...args}
        iconPosition='left'
        color='primary'
      >
        <Settings /> Settings
      </Button>
      <Button
        {...args}
        iconPosition='left'
        color='primary'
      >
        <Search /> Search
      </Button>
    </div>
    <div className='flex items-start justify-center gap-4 flex-col'>
      <Button
        {...args}
        iconPosition='right'
        color='primary'
      >
        Close <Cross />
      </Button>
      <Button
        {...args}
        iconPosition='right'
        color='primary'
      >
        Settings <Settings />
      </Button>
      <Button
        {...args}
        iconPosition='right'
        color='primary'
      >
        Search <Search />
      </Button>
    </div>
  </div>
)

export const ButtonLoading: Story = {
  args: {
    isLoading: true,
    children: 'Send'
  }
}
