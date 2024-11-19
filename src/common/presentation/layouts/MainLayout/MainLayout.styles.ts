import styled, {css} from "styled-components";

export const StyledMainLayout = styled.div(() => css`
    display: grid;
    grid-template-rows: fit-content(4rem) 1fr fit-content(4rem);
    grid-template-columns: 100%;
    grid-template-areas: 'header' 'content' 'navigation';
    max-width: 100vw;
    height: 100%;
    flex: 1;
    background: #F4F4F4;
`)

export const StyledMainLayoutContent = styled.main(() => css`
    grid-area: content;
    flex: 1;
    display: flex;
    flex-direction: column;
`)