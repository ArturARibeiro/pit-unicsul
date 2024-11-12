import styled, {css} from "styled-components";

export const StyledTextarea = styled.textarea(() => css`
    background: #EAEAEA;
    border: solid 1px #EAEAEA;
    border-radius: .375rem;
    padding:  1rem;
    font-size: 1rem;
    line-height: 1;
    outline: none;
    
    &::placeholder {
        font-weight: 500;
    }

    &:focus {
        background: #EEEEEE;
    }
`)