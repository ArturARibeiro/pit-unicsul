import styled, {css} from "styled-components";

// Components
import Input from "@common/presentation/components/atoms/Input";

export const StyledSelectBox = styled.label(() => css`
    position: relative;
    display: flex;
    flex-direction: column;
    
    &:after {
        font-family: bootstrap-icons, sans-serif;
        position: absolute;
        content: '\\F229';
        right: 1rem;
        top: .675rem;
        font-size: .875rem;
    }
`)

export const StyledSelectInput = styled(Input)(() => css`
    cursor: pointer;
`)

export const StyledSelectDropdown = styled.div(() => css`
    position: absolute;
    background: #FFFFFF;
    border: solid 1px #CCCCCC;
    border-radius: .375rem;
    top: calc(100% + .375rem);
    right: 0;
    left: 0;
    gap: .5rem;
    padding: .25rem;
    display: flex;
    flex-direction: column;
    z-index: 1024;
`)

export const StyledSelectSearch = styled(Input)(() => css`
    &, &:focus {
        background: #FFF;
    }
`)

export const StyledSelectOptions = styled.ul(() => css`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 10rem;
    overflow-y: auto;
`)

export const StyledSelectOption = styled.li<{$selected?: boolean}>(({ $selected }) => css`
    padding: .75rem .675rem;
    border-radius: .375rem;
    display: inline-flex;
    align-items: center;
    line-height: 1;

    ${$selected && css`
        color: #dd8c00;
        background: #FFB00022;
    `}
`)