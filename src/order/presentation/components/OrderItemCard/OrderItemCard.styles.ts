import styled, {css} from "styled-components";

// Components
import {Link} from "react-router-dom";

export const StyledOrderItemCard = styled.li(() => css`
    padding: 1rem;
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: fit-content(2rem) 1fr fit-content(0);
    grid-template-rows: repeat(3, fit-content(0));
    grid-template-areas: 
            'picture name price' 
            'picture quantity price' 
            'picture customizations customizations';

    border-bottom: solid 1px #EEE;
`)

export const StyledOrderItemCardPicture = styled.img(() => css`
    grid-area: picture;
    object-fit: cover;
    width: 3rem;
    height: 3rem;
    border-radius: .375rem;
`)

export const StyledOrderItemCardName = styled(Link)(() => css`
    grid-area: name;
    text-decoration: none;
    color: currentColor;
    font-weight: 600;
`)

export const StyledOrderItemCardPrice = styled.span(() => css`
    grid-area: price;
    white-space: nowrap;
    display: flex;
    align-items: start;
    padding: .25rem 0;
    //
`)

export const StyledOrderItemCardQuantity = styled.span(() => css`
    grid-area: quantity;
`)