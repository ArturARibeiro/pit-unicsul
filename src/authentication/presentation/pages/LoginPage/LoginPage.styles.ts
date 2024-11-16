import styled, {css} from "styled-components";

export const StyledLoginPage = styled.div(() => css`
    flex: 1;
    background: #FFB000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`)

export const StyledLoginPageForm = styled.form(() => css`
    width: clamp(200px, 100%, 420px);
    padding: 2rem;
    background: #FFF;
    border-radius: .25rem;
    flex-direction: column;
    display: flex;
`)