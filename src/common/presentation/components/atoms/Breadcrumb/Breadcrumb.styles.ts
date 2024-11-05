import styled, {css} from "styled-components";

// Components
import {Link} from "react-router-dom";

export const StyledBreadcrumb = styled.ol(() => css`
    list-style: none;
    display: inline-flex;
    align-items: center;
    border: solid 1px #EAEAEA;
    border-radius: .375rem;
    padding: .675rem 1rem;
    width: fit-content;
    margin: 0;
    gap: .5rem;
`)

export const StyledBreadcrumbItem = styled.li(() => css`
    display: inline-flex;
    align-items: center;
    line-height: 1;
    font-weight: 500;
    transition: all 120ms;

    &:not(:last-child) {
        color: #00000088;
    }

    &:not(:last-child):after {
        font-family: bootstrap-icons, sans-serif;
        content: '\\F285';
        color: #000000FF;
        margin-left: .5rem;
        font-size: .75rem;
        opacity: .75;
    }

    &:hover {
        color: #000000FF;
    }

    &:active {
        color: #00000088;
    }
`)

export const StyledBreadcrumbLink = styled(Link)(() => css`
    text-decoration: none;
    color: inherit;
`)