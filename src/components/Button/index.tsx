import {TextButton, DefaultButton, LinkButton, StyledTextButtonProps} from './Button'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const Types = {
  text: TextButton,
  link: LinkButton,
  default: DefaultButton
}

export default function Button({ children, type = "default", ...props}: StyledTextButtonProps) {
  const FC = Types[type]
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FC {...props}>
        {children}
      </FC>
    </ThemeProvider>
  )
}
