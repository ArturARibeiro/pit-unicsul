import styled, {css} from "styled-components";

export const StyledLandingPageSearchSection = styled.section(() => css`
    background-image: linear-gradient(to bottom, #ff9900, #FFb000);
    color: white;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`)

export const StyledLandingPageSearchTitle = styled.h1(() => css`
    font-size: 1.5rem;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`)

export const StyledLandingPageCategory = styled.div(() => css`
    box-shadow: 0 0 4px #82828266;
    width: 100%;
    aspect-ratio: 1;
    background: #FFF;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    & picture {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & img {
        width: 90%;
        height: 90%;
        object-fit: contain;
    }

    @media screen and (min-width: 768px) {
        border-radius: .375rem;
        aspect-ratio: auto;
        height: 5rem;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 120ms;
        }

        &:hover img {
            filter: blur(1px) brightness(.75);
        }

        &:hover > ${StyledLandingPageCategoryTitle} {
            opacity: 1;
        }
    }
`)

export const StyledLandingPageCategoryTitle = styled.h6(() => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bolder;
    opacity: 0;
    color: white;
    margin: 0;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`)