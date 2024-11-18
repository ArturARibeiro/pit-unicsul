import styled, {css} from "styled-components";

export const StyledOrderListPageGallery = styled.div(() => css`
    position: relative;
    width: 2.75rem;
    height: 2.75rem;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        border-radius: .25rem;
        opacity: 0;
    }

    & img:nth-child(1) {
        position: relative;
        z-index: 1;
        opacity: 1;
    }

    & img:nth-child(2) {
        transform: translate(-50%, -50%) scale(.95);
        opacity: .9;
        top: 50%;
        left: 60%;
        position: absolute;
    }

    & img:nth-child(3) {
        transform: translate(-50%, -50%) scale(.9);
        opacity: .9;
        top: 50%;
        left: 65%;
        position: absolute;
    }
`)