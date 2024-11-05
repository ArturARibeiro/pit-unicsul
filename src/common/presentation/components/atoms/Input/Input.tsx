import {forwardRef} from "react";

// Types
import type {InputProps} from "./Input.types";

// Styled components
import {StyledInput} from "./Input.styles";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput {...props} ref={ref}/>
});

export default Input;