import styled, {css} from "styled-components";

// Types
import {ProductCardProps} from "./ProductCard.types";

// Components
import ProductRating from "@modules/product/presentation/components/ProductRating";
import ProductPrice from "@modules/product/presentation/components/ProductPrice";

export const StyledProductCard = styled.div<{$variant: ProductCardProps['variant']}>(({ $variant }) => css`
    gap: .5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 100px;
    
    ${$variant == 'small' && StyledProductCardSmall}
`)

export const StyledProductCardPicture = styled.img(() => css`
    grid-area: picture;
    width: 100%;
    aspect-ratio: 1;
    background: #88888844;
    border-radius: .5rem;
    object-fit: cover;
    
    @media screen and (min-width: 768px) {
        aspect-ratio: 4 / 3;
    }
`)

export const StyledProductCardName = styled.h6(() => css`
    grid-area: name;
    font-size: .875rem;
    color: #404040;
    font-weight: 400;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -moz-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`)

export const StyledProductCardPrice = styled(ProductPrice)(() => css`
    grid-area: price;
    
    @media screen and (max-width: 768px) {
        font-size: 1.125rem;        
    }
`)

export const StyledProductCardRating = styled(ProductRating)(() => css`
    grid-area: rating;
    background: #FFFFFF;
    position: absolute;
    padding: .25rem .5rem;
    border-radius: .25rem;
    line-height: 1;
    left: .5rem;
    top: .5rem;
`)

// Variants
const StyledProductCardSmall = css`
    display: grid;
    grid-template-columns: fit-content(0) 1fr;
    grid-template-rows: fit-content(0) 1fr fit-content(0);
    grid-template-areas: 'picture rating' 'picture name' 'picture price';
    grid-column-gap: 1rem;
    grid-row-gap: .25rem;
    
    & ${StyledProductCardPicture} {
        aspect-ratio: auto;
        width: 4rem;
        height: 4rem;
    }
    
    & ${StyledProductCardRating} {
        position: static;
        font-size: .875rem;
        padding: 0;
    }
    
    & ${StyledProductCardName} {
        align-self: center;
    }
`