import styled, {css} from "styled-components";

export const StyledLandingPageCategory = styled.div(() => css`
    width: 100%;
    aspect-ratio: 1;
    background: #ffd993;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    & img {
        width: 90%;
        height: 90%;
        object-fit: contain;
    }
`)