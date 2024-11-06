import styled, {css} from "styled-components";

export const StyledProductPagePicture = styled.img(() => css`
    width: 100%;
    aspect-ratio: 4 / 3;
    background: #88888844;
    object-fit: cover;
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
    gap: .5rem;


    @media screen and (max-width: 768px) {
        position: fixed;
        z-index: 1024;
        left: 0;
        bottom: 0;
        right: 0;
        height: 3.5rem;
        background: #FFFFFF;
        padding: .25rem .5rem;
    }
`)