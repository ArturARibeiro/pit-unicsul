import styled, {css} from "styled-components";

export const StyledCartItemPrice = styled.div(() => css`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;
    font-size: 1em;
    line-height: 1;
`)

export const StyledCartItemBasePrice = styled.span(() => css`
    color: black;

    ${StyledCartItemPromotionPrice} ~ & {
        display: none;
    }
`)

export const StyledCartItemPromotionPrice = styled.span(() => css`
    background: #00FF0022;
    color: green;
    padding: .25rem .25rem;
    border-radius: .125rem;
    font-weight: 500;
`)