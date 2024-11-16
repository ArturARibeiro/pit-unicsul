import styled, {css} from "styled-components";

export const StyledCategoryPageBanner = styled.div(() => css`
    display: flex;
    flex-direction: column;
    position: relative;

    & img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    &:before {
        content: '';
        position: absolute;
        background: linear-gradient(to top, black, #00000033);
        opacity: .5;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`)

export const StyledCategoryPageTitle = styled.h1(() => css`
    position: absolute;
    color: white;
    font-weight: bolder;
    left: 0;
    right: 0;
    bottom: 1rem;
`)