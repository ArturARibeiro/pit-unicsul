import styled, {css} from "styled-components";
import Button from "@common/presentation/components/atoms/Button";

export const StyledCartItemQuantity = styled.div(() => css`
    display: flex;
    align-items: center;
    border-radius: .375rem;
    width: fit-content;
    gap: .5rem;

    & > *:first-child {
        border-top-left-radius: .375rem;
        border-bottom-left-radius: .375rem;
    }

    & > *:last-child {
        border-top-right-radius: .375rem;
        border-bottom-right-radius: .375rem;
    }
`)

export const StyledCartItemQuantityButton = styled(Button)(() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1;
    
    & .bi {
        -webkit-text-stroke-width: 1px;
    }
`)

export const StyledCartItemQuantityLabel = styled.span(() => css`
    text-align: center;
`)