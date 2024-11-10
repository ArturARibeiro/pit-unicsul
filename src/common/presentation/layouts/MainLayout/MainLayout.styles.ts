import styled, {css} from "styled-components";

export const StyledMainLayout = styled.div(() => css`
    display: grid;
    grid-template-rows: fit-content(4rem) 1fr fit-content(4rem);
    grid-template-columns: 100vw;
    grid-template-areas: 'header' 'content' 'navigation';
    max-width: 100vw;
    min-height: 100%;
    background: #FEFEFE;
`)

export const StyledMainLayoutContent = styled.main(() => css`
    grid-area: content;
    flex: 1;
`)