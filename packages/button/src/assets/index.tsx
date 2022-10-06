import { ButtonType, Variants } from "./Button.propsTypes"

export function Button({ children, variant, color, ...props }: ButtonType) {
  return (
    <button type="submit" style={{ background: color }} {...props}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: Variants.default,
}
