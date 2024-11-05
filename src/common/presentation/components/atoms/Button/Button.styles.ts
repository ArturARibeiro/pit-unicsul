import styled, {css} from "styled-components";

// Types
import type {ButtonProps} from "./Button.types";

export const StyledButton = styled.button<{
  $variant: ButtonProps['variant']
}>(({ $variant }) => css`
    padding: .675rem 1rem;
    border-radius: .375rem;
    border: solid 1px #ffb000;
    background: #ffb000;
    color: #453206;
    font-weight: 600;
    font-size: 1rem;
    user-select: none;
    transition: opacity 120ms;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    line-height: 1;
    gap: .5rem;

    &:active {
        opacity: .675;
    }

    ${$variant == 'ghost' && GhostButton}
    ${$variant == 'outline' && OutlineButton}
`)

const GhostButton = css`
    color: #efa802;
    background: #FFB00022;
    border-color: #FFB00022;
`

const OutlineButton = css`
    background: transparent;
    border-color: #efa802;
    color: #efa802;
`