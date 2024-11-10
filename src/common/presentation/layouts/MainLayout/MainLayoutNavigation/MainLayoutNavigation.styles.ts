import styled, {css} from "styled-components";

export const StyledMainLayoutNavigation = styled.nav(() => css`
    grid-area: navigation;
    position: sticky;
    bottom: 0;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    user-select: none;

    height: 4rem;
    min-height: 4rem;
    background: #FFFFFF;
    box-shadow: 0 -1px 4px #88888822;
    z-index: 1024;
`)

export const StyledMainLayoutNavigationMenu = styled.ul(() => css`
    list-style: none;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    height: 3rem;
    padding: 0;
    margin: 0;
    gap: 1rem;
    flex: 1;
`)

export const StyledMainLayoutNavigationMenuItem = styled.li(() => css`
  flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    border-radius: .375rem;
    font-size: .675rem;
    opacity: .5;
    
    & .bi {
        font-size: 1.375rem;
    }
    
    &:active {
        background: #88888811;
    }
    
    &[aria-selected="true"] {
        opacity: 1;
        color: #FFb000;
    }
`)