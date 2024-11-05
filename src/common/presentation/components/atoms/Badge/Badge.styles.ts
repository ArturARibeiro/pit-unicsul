import styled, {css} from "styled-components";

// Types
import type {BadgeProps} from "./Badge.types";

export const StyledBadge = styled.span<{
  $variant: BadgeProps['variant'];
}>(({ $variant }) => css`
    font-size: .875rem;
    background: #EAEAEA;
    width: fit-content;
    line-height: 1;
    padding: .25rem .375rem;
    border-radius: .25rem;
    font-weight: 700;
    
    ${$variant == 'info' && StyledInfoBadge};
    ${$variant == 'danger' && StyledDangerBadge};
    ${$variant == 'success' && StyledSuccessBadge};
    ${$variant == 'warning' && StyledWarningBadge};
`)

const StyledDangerBadge = css`
    background: #ed3636;
    color: #ffefef;
`;

const StyledInfoBadge = css`
    background: #008cff;
    color: #e8f2fa;
`;

const StyledSuccessBadge = css`
    background: #01b301;
    color: #efffef;
`;

const StyledWarningBadge = css`
    background: #ffb000;
    color: #553d04;
`;