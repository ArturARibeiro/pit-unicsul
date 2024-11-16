import styled, {css} from "styled-components";

// Components
import Input from "@common/presentation/components/atoms/Input";
import ProductPrice from "@modules/product/presentation/components/ProductPrice";

export const StyledSearchLabel = styled.label(() => css`
    display: inline-flex;
    align-items: center;
    padding: 0 1rem;
    background: #FFF;
    border-radius: .375rem;
    width: clamp(200px, 100%, 500px);
    position: relative;

    & .bi {
        color: #FFb000;
        -webkit-text-stroke-width: 1px;
    }
`)

export const StyledSearchInput = styled(Input)(() => css`
    background: transparent;
    border: none;

    &:focus {
        background: transparent;
    }
`)

export const StyledSearchResult = styled.div(() => css`
    position: absolute;
    left: 0;
    right: 0;
    color: #202020;
    background: #FFFFFF;
    top: calc(100% + 1rem);
    border-radius: .375rem;
    z-index: 1024;
    box-shadow: 0 0 8px #82828233;

    &:before {
        content: '';
        position: absolute;
        left: 1rem;
        top: 0;

        translate: 0 -50%;
        width: .75rem;
        height: .75rem;
        background: #FFFFFF;
        transform: rotate(45deg);
    }
`)

export const StyledSearchList = styled.ul(() => css`
    list-style: none;
    padding: .5rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: .25rem;
    max-height: 300px;
    overflow-y: auto;
    scrollbar-width: thin;
`)

export const StyledSearchListItem = styled.li(() => css`
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-template-rows: repeat(2, fit-content(0));
    grid-template-areas: 'picture name' 'picture price';
    grid-column-gap: .75rem;
    grid-row-gap: .25rem;
    border-radius: .25rem;
    padding: .5rem;

    &:hover {
        background: #82828211;
        cursor: pointer;
    }
`)

export const StyledSearchListItemPicture = styled.img(() => css`
    grid-area: picture;
    width: 2rem;
    height: 2rem;
    border-radius: .25rem;
    object-fit: cover;
`)

export const StyledSearchListItemName = styled.h6(() => css`
    grid-area: name;
    margin: 0;
`)

export const StyledSearchListItemPrice = styled(ProductPrice)(() => css`
    grid-area: price;
    font-size: .75rem;
`)