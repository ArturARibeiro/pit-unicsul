import styled, {css} from "styled-components";

export const StyledProductPrice = styled.div(() => css`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;
    font-size: 1em;
    line-height: 1;
`)

export const StyledProductBasePrice = styled.span(() => css`
    color: black;

    ${StyledProductPromotionPrice} ~ & {
        text-decoration: line-through;
        opacity: .5;
    }
`)

export const StyledProductPromotionPrice = styled.span(() => css`
    background: #00FF0022;
    color: green;
    padding: .25rem .25rem;
    border-radius: .125rem;
    font-weight: 500;
`)