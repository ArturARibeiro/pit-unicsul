import styled, {css} from "styled-components";

// Components
import Button from "@common/presentation/components/atoms/Button";

export const StyledProductQuantityLabel = styled.div(() => css`
    border-radius: .375rem;
    display: flex;
    align-items: center;
    width: fit-content;

     & :first-child {
         border-bottom-right-radius: 0;
         border-top-right-radius: 0;
     }

     & :last-child {
         border-bottom-left-radius: 0;
         border-top-left-radius: 0;
     }
`)

export const StyledProductQuantity = styled.div(() => css`
    padding: 0;
    width: 4rem;
    border-radius: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
`)

export const StyledProductQuantityButton = styled(Button)(() => css`
    
`)