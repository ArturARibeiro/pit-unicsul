import {forwardRef} from "react";

// Types
import type {ButtonProps} from "./Button.types";

// Styled Components
import {StyledButton} from "./Button.styles";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({variant, ...rest}, ref) => {
  return <StyledButton $variant={variant} {...rest} ref={ref}/>
})

export default Button;