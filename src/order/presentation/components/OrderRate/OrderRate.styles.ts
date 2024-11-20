import styled, {css} from "styled-components";

export const StyledOrderRate = styled.ol<{$rating: number}>(({ $rating }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: .5rem 0;
    margin: 0;
    gap: 1rem;

    & ${StyledOrderRateItem}:nth-child(-n + ${$rating}):before {
        content: '\\F586';
        color: #FFB000;
    }
`)

export const StyledOrderRateItem = styled.li(() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    
    &:before {
        font-family: bootstrap-icons, sans-serif;
        color: #828282;
        content: '\\F588';
        font-size: 1.25rem;
    }
`)