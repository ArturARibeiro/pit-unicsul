import styled, {css, keyframes} from "styled-components";

const statuses = [
  'pending',
  'preparing',
  'transport',
  'concluded',
]

export const StyledOrderStatus = styled.ol<{ $current: string }>(({$current}) => css`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;

    & ${StyledOrderStatusItem}:nth-child(-n + ${statuses.indexOf($current) + 1}):before {
        background: #FFB000;
    }

    & ${StyledOrderStatusItem}:nth-child(${statuses.indexOf($current) + 1}):before {
        animation: ${CurrentStatus} 1.2s linear infinite;
        background: #FFB000;
    }
`)

export const StyledOrderStatusItem = styled.li(() => css`
    display: inline-flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    gap: .5rem;

    &:not(:last-child) {
        flex: 1;
    }

    &:before {
        position: absolute;
        translate: 0 -50%;
        left: 0;
        top: 50%;
        content: '';
        height: .125rem;
        width: 100%;
        background: #82828233;
    }
`)

export const StyledOrderStatusIcon = styled.i(() => css`
    width: 2.5rem;
    height: 2.5rem;
    background: #FFB000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    -webkit-text-stroke-width: 1px;
    position: relative;
`)

const CurrentStatus = keyframes`
    0% {
        width: 0;
        translate: 0;
    }

    50% {
        width: 100%;
        translate: 0;
    }

    100% {
        width: 100%;
        translate: 100%;
    }
`