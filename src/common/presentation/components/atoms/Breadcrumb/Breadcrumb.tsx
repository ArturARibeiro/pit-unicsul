import {forwardRef} from "react";

// Types
import {BreadcrumbProps} from "./Breadcrumb.types";

// Components
import Each from "@common/presentation/components/atoms/Each";

// Styled components
import {StyledBreadcrumb, StyledBreadcrumbItem, StyledBreadcrumbLink} from "./Breadcrumb.styles";

const Breadcrumb = forwardRef<HTMLOListElement, BreadcrumbProps>(({items, ...rest}, ref) => {
  return (
    <StyledBreadcrumb {...rest} ref={ref}>
      <Each data={items.filter(i => i.name)} render={item => (
        <StyledBreadcrumbItem>
          <StyledBreadcrumbLink to={item.href ?? '#'} children={item.name}/>
        </StyledBreadcrumbItem>
      )}/>
    </StyledBreadcrumb>
  )
})

export default Breadcrumb;