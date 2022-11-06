// Button.stories.js|jsx
import React, { ComponentStory, ComponentMeta } from '@storybook/react'

import TextButton from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TextButton',
  component: TextButton,
  args: {
    type: 'default',
    color: 'default',
    children: 'children',
    textTransform: 'first',

  },
  argTypes: {
    type: {
      options: ['text', 'link', 'default'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    color: {
      options: ['default', 'primary', 'secondary'],
      control: { type: 'select' },
    },
    textTransform: {
      options: ['first', 'uppercase', 'lowercase'],
      control: { type: 'select' },
    }
  },
} as ComponentMeta<typeof TextButton>

export const Default: ComponentStory<typeof TextButton> = ({
  children = 'Default',
  color = 'default',
  type = 'default',
  textTransform = 'first',
}) => <TextButton color={color} type={type} textTransform={textTransform}>{children}</TextButton>
