import styled, {css} from "styled-components";
import Input from "@common/presentation/components/atoms/Input";

export const StyledLandingPageSearch = styled.section(() => css`
    padding: 0 .75rem 1.5rem;
    background: #FFB000;
    border-radius: 0 0 1em 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    
    @media screen and (min-width: 768px) {
        border-radius: 0;
        padding: 6rem 0;
    }
`)

export const StyledLandingPageSearchInput = styled(Input)(() => css`
    width: clamp(200px, 100%, 600px);
    border-radius: .5rem;
    background: white;
    border-color: white;
`)

export const StyledLandingPageCategory = styled.div(() => css`
    width: 100%;
    aspect-ratio: 1;
    background: #ffd993;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    overflow: hidden;

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
        }
    }
`)