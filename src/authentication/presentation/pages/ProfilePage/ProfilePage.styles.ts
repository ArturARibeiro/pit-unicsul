import styled, {css} from "styled-components";

export const StyledProfilePage = styled.div(() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: .25rem;
    flex: 1;
`)

export const StyledProfilePagePicture = styled.img(() => css`
    width: 6rem;
    height: 6rem;
    border-radius: 6rem;
    background: #828282;
    margin-bottom: 1rem;
`)

export const StyledProfilePageName = styled.h6(() => css`
    font-size: 1.375rem;
    margin: 0;
`)

export const StyledProfilePageEmail = styled.p(() => css`
    font-size: 1rem;
    margin: 0;
`)