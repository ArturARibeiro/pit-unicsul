import {forwardRef} from "react";

// Types
import type {ButtonProps} from "./Button.types";

// Styled Components
import {StyledButton} from "./Button.styles";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({variant, type = 'button', ...rest}, ref) => {
  return <StyledButton $variant={variant} {...rest} type={type} ref={ref}/>
})

export default Button;