import styled, {css} from "styled-components";

export const StyledInput = styled.input(() => css`
    background: #EAEAEA;
    border: solid 1px #EAEAEA;
    border-radius: .375rem;
    padding: .675rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
    outline: none;
    
    &:focus {
        background: #EEEEEE;
    }
`)