import styled, {css} from "styled-components";

export const StyledSwitch = styled.input(() => css`
    appearance: none;
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 2rem;
    background: #EAEAEA;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: background 200ms;
    
    &:before {
        position: absolute;
        content: '';
        width: 1.125rem;
        height: 1.125rem;
        background: #BBB;
        border-radius: 1rem;
        transition: all 200ms;
        translate: 0 -50%;
        left: .25rem;
        top: 50%;
    }
    
    &:checked {
        background: #ffb000;
        
        &:before {
            background: #FFFFFF;
            left: 1.2rem;
        }
    }
`)