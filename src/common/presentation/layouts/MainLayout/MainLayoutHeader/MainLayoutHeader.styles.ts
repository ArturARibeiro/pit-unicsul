import styled, {css} from "styled-components";

// Components
import Button from "@common/presentation/components/atoms/Button";

export const StyledMainLayoutHeader = styled.header(() => css`
    grid-area: header;
    display: flex;
    position: sticky;
    z-index: 1024;
    color: #202020;
    font-weight: 600;
    top: 0;
    
    background: #FFFFFF;
    border-bottom: solid 1px #F2F2F2;
`)

export const StyledMainLayoutHeaderContainer = styled.div(() => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: .75rem 1rem;
    gap: .25rem;
`)

export const StyledMainLayoutHeaderButton = styled(Button)<{ $badge?: string|number }>(({ $badge }) => css`
    padding: 0;
    width: 2.75rem;
    height: 2.75rem;
    background: #F8F8F8;
    font-size: 1.375rem;
    color: #222222;
    border: none;

    & .bi {
        -webkit-text-stroke-width: .01rem;
    }

    ${$badge && css`
        position: relative;

        &:after {
            position: absolute;
            content: '${$badge}';
            padding: .125rem .25rem;
            right: .25rem;
            top: .25rem;
            line-height: 1;
            height: 1.125rem;
            min-width: 1.125rem;
            border-radius: 1.5rem;
            border: solid 2px #F8F8F8;
            font-size: .75rem;
            background: red;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
        }
    `}
`)

export const StyledMainLayoutHeaderLocation = styled.div(() => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    translate: -50%;
    gap: .125rem;
`)

export const StyledMainLayoutHeaderLocationSelect = styled.div(() => css`
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    gap: 1rem;

    &:before {
        font-family: bootstrap-icons, sans-serif;
        position: relative;
        content: '\\F3E7';
        color: #FFB000;
        font-size: .875em;
    }

    &:after {
        font-family: bootstrap-icons, sans-serif;
        position: relative;
        content: '\\F282';
        color: #FFB000;
        font-size: .875em;
        -webkit-text-stroke-width: 1px;
    }
`)