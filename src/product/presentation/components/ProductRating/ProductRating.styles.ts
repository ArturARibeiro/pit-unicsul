import styled, {css} from "styled-components";

export const StyledProductRating = styled.small(() => css`
    color: #ffb000;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    gap: .375rem;

    &:before {
        font-family: bootstrap-icons, sans-serif;
        content: '\\F586';
        font-size: .875em;
    }
`)