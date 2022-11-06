import React from '@storybook/react'
import { render } from '@testing-library/react'

import TextButton from '.'

describe('TextButton', () => {
  test('renders the Button component', () => {
    render(<TextButton>hello</TextButton>)
  })
})
