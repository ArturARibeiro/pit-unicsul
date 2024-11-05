import {forwardRef} from "react";

// Types
import type {RadioProps} from "./Radio.types";

// Styled components
import {StyledRadio} from "./Radio.styles";

const Radio = forwardRef<HTMLInputElement, RadioProps>(({type = 'radio', ...rest}, ref) => {
  return <StyledRadio {...rest} type={type} ref={ref}/>
})

export default Radio;