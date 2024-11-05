import styled, {css} from "styled-components";

export const StyledRadio = styled.input(() => css`
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2rem;
    background: #EAEAEA;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    
    &:before {
        position: absolute;
        content: '';
        left: 50%;
        top: 50%;
        width: .875rem;
        height: .875rem;
        border-radius: 2rem;
        box-shadow: 0 0 0 1rem transparent;
        background: transparent;
        translate: -50% -50%;
        transition: all 200ms;
    }
    
    &:checked:before {
        box-shadow: 0 0 0 1rem #ffb000;
        background: #FFFFFF;
        width: .5rem;
        height: .5rem;
    }
`)