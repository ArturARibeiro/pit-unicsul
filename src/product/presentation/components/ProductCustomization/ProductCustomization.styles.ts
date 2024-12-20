import styled, {css} from "styled-components";

export const StyledProductCustomization = styled.div(() => css`
    display: flex;
    flex-direction: column;
    border: solid 1px #88888822;
`)

export const StyledProductCustomizationName = styled.h5(() => css`
    font-size: 1rem;
    margin: 0;
    padding: 1rem;
    background: #88888822;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
`)

export const StyledProductCustomizationList = styled.ul(() => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`)