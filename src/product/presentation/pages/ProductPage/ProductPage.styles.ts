import styled, {css} from "styled-components";

export const StyledProductPage = styled.div(() => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`)

export const StyledProductPageNavigation = styled.nav(() => css`
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        position: relative;
        margin-bottom: 1rem;
        padding: 0;
    }
`)

export const StyledProductPageNavigationButton = styled.button(() => css`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    line-height: 1;
    background: #FFFFFF;
    border: none;
    box-shadow: 0 0 4px #88888822;

    & .bi {
        -webkit-text-stroke-width: .02rem;
    }
`)

export const StyledProductPagePicture = styled.img(() => css`
    width: 100%;
    aspect-ratio: 4 / 3;
    background: #88888844;
    object-fit: cover;
    position: sticky;
    top: 1rem;

    @media screen and (max-width: 768px) {
        position: static;
    }
`)

export const StyledProductPageInfo = styled.div(() => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: .25rem;
`)

export const StyledProductPageSku = styled.span(() => css`
    font-size: .75rem;
`)

export const StyledProductPageName = styled.h1(() => css`
    font-size: 1.375rem;
`)

export const StyledProductPageDescription = styled.p(() => css`
    color: #404040;
`)

export const StyledProductPageActions = styled.div(() => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        position: sticky;
        z-index: 1024;
        left: 0;
        bottom: 0;
        right: 0;
        background: #FFFFFF;
        padding: 1rem;
    }
`)