import {forwardRef} from "react";

// Types
import {SwitchProps} from "./Switch.types";

// Styled components
import {StyledSwitch} from "./Switch.styles";

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({type = 'checkbox', ...rest}, ref) => {
  return <StyledSwitch {...rest} type={type} ref={ref}/>
})

export default Switch;