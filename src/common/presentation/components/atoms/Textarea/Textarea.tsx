import {forwardRef, TextareaHTMLAttributes} from "react";
import {StyledTextarea} from "./Textarea.styles";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => {
  return <StyledTextarea {...props} ref={ref}/>
})

export default Textarea;