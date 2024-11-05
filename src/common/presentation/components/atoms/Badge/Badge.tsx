import {forwardRef} from "react";

// Types
import type {BadgeProps} from "./Badge.types";

// Styled components
import {StyledBadge} from "./Badge.styles";

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({variant, ...rest}, ref) => {
  return <StyledBadge {...rest} $variant={variant} ref={ref}/>
});

export default Badge;