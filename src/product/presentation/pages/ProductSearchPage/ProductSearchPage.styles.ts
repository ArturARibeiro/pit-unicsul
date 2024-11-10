import styled, {css} from "styled-components";

export const StyledProductSearchIllustration = styled.img(() => css`
    width: clamp(200px, 100%, 400px);
    object-fit: contain;
    margin: auto;
    opacity: .3;
    filter: grayscale(.8);
`)