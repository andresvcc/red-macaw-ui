// Button.stories.js|jsx
import React, { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './MyButton';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  args:{
    label: 'label',
    children: 'children'
  },
  argTypes: {
    globalArg: {
      table: {
        disable: true
      }
    },
    href: {
      table: {
        disable: true
      }
    },
    target: {
      table: {
        disable: true
      }
    },
    htmlType: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({children ="Template", label}) => <Button label={label}>{children}</Button>;

export const Primary = Default.bind({});
Primary.args = { children: 'Button' };

export const Secondary = Default.bind({});  
Secondary.args = { children: 'Button2' };