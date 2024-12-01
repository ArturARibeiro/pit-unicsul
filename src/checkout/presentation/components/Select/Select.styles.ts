import styled, {css} from "styled-components";

export const StyledSelect = styled.ul(() => css`
    display: flex;
    flex-direction: column;
    list-style: none;
    border: solid 1px #DDD;
    border-radius: .375rem;
    overflow: hidden;
    padding: 0;
    margin: 0;
    flex: 1;
`)

export const StyledSelectItem = styled.li(() => css`
    display:flex;
    flex-direction: column;

    &:not(:last-child) {
        border-bottom: solid 1px #DDD;
    }
`)

export const StyledSelectLabel = styled.label(() => css`
    background: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`)

export const StyledSelectName = styled.h6(() => css`
    margin: 0;
    padding: 0;
`)

export const StyledSelectCaption = styled.caption(() => css`
    color: #828282;
    font-size: .75rem;
    line-height: 1;
    margin: 0;
    padding: 0;
`)