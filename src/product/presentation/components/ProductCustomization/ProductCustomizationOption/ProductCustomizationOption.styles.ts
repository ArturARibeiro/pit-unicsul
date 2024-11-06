import styled, {css} from "styled-components";
import Checkbox from "@common/presentation/components/atoms/Checkbox";
import Radio from "@common/presentation/components/atoms/Radio";

export const StyledProductCustomizationOption = styled.li(() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .5rem;
    gap: 1rem;


    &:not(:last-child) {
        border-bottom: solid 1px grey;
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

export const StyledProductCustomizationOptionCheck = styled(Checkbox)(() => css`
    //
`)

export const StyledProductCustomizationOptionRadio = styled(Radio)(() => css`
    //
`)