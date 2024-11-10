import styled, {css} from "styled-components";

export const StyledProductCustomizationOption = styled.li(() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .375rem 1rem;
    gap: 1rem;


    &:not(:last-child) {
        border-bottom: solid 1px #88888833;
    }
`)

export const StyledProductCustomizationOptionLabel = styled.label(() => css`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    flex: 1;
    padding: .5rem 0;
`)

export const StyledProductCustomizationOptionName = styled.span(() => css`
    //
`)

export const StyledProductCustomizationOptionPrice = styled.span(() => css`
    font-weight: 600;
    font-size: .75rem;
    background: #88888833;
    padding: .125rem .25rem;
    border-radius: .25rem;

    &:before {
        content: '+ ';
    }
`)