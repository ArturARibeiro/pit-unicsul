import styled, {css} from "styled-components";

// Components
import Button from "@common/presentation/components/atoms/Button";

export const StyledMainLayoutHeader = styled.header(() => css`
    grid-area: header;
    display: flex;
    position: sticky;
    z-index: 1024;
    font-weight: 600;
    box-shadow: 0 1px 4px #82828222;
    left: 0;
    top: 0;
    right: 0;

    color: #202020;
    background: #FFFFFF;
`)

export const StyledMainLayoutHeaderContainer = styled.div(() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .75rem 1rem;
    gap: .25rem;
`)

export const StyledMainLayoutHeaderButton = styled(Button)<{ $badge?: string | number }>(({$badge}) => css`
    padding: 0;
    width: 2.25rem;
    height: 2.25rem;
    background: #F8F8F8;
    font-size: 1rem;
    color: #222222;
    border: none;

    & .bi {
        -webkit-text-stroke-width: .01rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.375rem;
        width: 2.75rem;
        height: 2.75rem;
    }

    ${$badge && css`
        position: relative;

        &:after {
            position: absolute;
            content: '${$badge}';
            padding: .125rem .25rem;
            right: .125rem;
            top: .125rem;
            line-height: 1;
            height: 1.125rem;
            min-width: 1.125rem;
            border-radius: 1.5rem;
            border: solid 2px #F8F8F8;
            font-size: .675rem;
            background: red;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
        }
    `}
`)

export const StyledMainLayoutHeaderProfile = styled(StyledMainLayoutHeaderButton)(() => css`
    @media screen and (max-width: 768px) {
        display: none;
    }
`)

export const StyledMainLayoutHeaderLocation = styled.div(() => css`
    display: flex;
    flex-direction: column;
    gap: .125rem;
`)

export const StyledMainLayoutHeaderLocationSelect = styled.div(() => css`
    display: inline-flex;
    align-items: center;
    //font-weight: 400;
    gap: 1rem;

    &:before {
        font-family: bootstrap-icons, sans-serif;
        position: relative;
        content: '\\F3E7';
        color: #FFB000;
        font-size: .875em;
    }
`)

export const StyledMainLayoutHeaderBrand = styled.img(() => css`
    height: 2rem;
    object-fit: contain;
    cursor: pointer;
    position: absolute;
    translate: -50%;
    left: 50%;

    @media screen and (max-width: 768px) {
        position: relative;
        translate: none;
        left: 0;
    }
`)