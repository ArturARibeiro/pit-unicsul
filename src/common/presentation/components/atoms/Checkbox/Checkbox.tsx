import {forwardRef} from "react";

// Types
import type {CheckboxProps} from "./Checkbox.types";

// Styled components
import {StyledCheckbox} from "./Checkbox.styles";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({type = 'checkbox', ...rest}, ref) => {
  return <StyledCheckbox {...rest} type={type} ref={ref}/>
})

export default Checkbox;