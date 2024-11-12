import styled, {css} from "styled-components";

// Components
import Button from "@modules/common/presentation/components/atoms/Button";
import CartItemCustomization from "@modules/cart/presentation/components/CartItemCustomization";
import CartItemQuantity from "@modules/cart/presentation/components/CartItemQuantity";
import {Link} from "react-router-dom";
import CartItemPrice from "@modules/cart/presentation/components/CartItemPrice";

export const StyledCartItemCard = styled.li(() => css`
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

export const StyledCartItemCardPicture = styled.img(() => css`
    grid-area: picture;
    object-fit: cover;
    width: 3rem;
    height: 3rem;
    border-radius: .375rem;
`)

export const StyledCartItemCardName = styled(Link)(() => css`
    grid-area: name;
    text-decoration: none;
    color: currentColor;
    font-weight: 600;
`)

export const StyledCartItemCardPrice = styled(CartItemPrice)(() => css`
    grid-area: price;
    white-space: nowrap;
    display: flex;
    align-items: start;
    padding: .25rem 0;
    //
`)

export const StyledCartItemCardCustomizations = styled(CartItemCustomization)(() => css`
    grid-area: customizations;
`)

export const StyledCartItemCardQuantity = styled(CartItemQuantity)(() => css`
    grid-area: quantity;
    //
`)

export const StyledCartItemCardRemove = styled(Button)(() => css`
    grid-area: remove;
    padding: 0;
    width: 2.5rem;
    height: 2.5rem;
    align-self: start;
    margin: .5rem 0;
`)