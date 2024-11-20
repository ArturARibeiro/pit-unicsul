import {useState} from "react";

// Types
import {OrderRateProps} from "./OrderRate.types";

// Styled components
import {StyledOrderRate, StyledOrderRateItem} from "./OrderRate.styles";

const OrderRate = ({rate = 5, disabled, onChange}: OrderRateProps) => {
  const [rating, setRating] = useState<number>(rate);

  const handleRateOrder = (rating: number) => {
    if (!disabled) {
      onChange?.(rating);
      setRating(rating);
    }
  }

  return (
    <StyledOrderRate $rating={rating}>
      <StyledOrderRateItem onClick={() => handleRateOrder(1)}/>
      <StyledOrderRateItem onClick={() => handleRateOrder(2)}/>
      <StyledOrderRateItem onClick={() => handleRateOrder(3)}/>
      <StyledOrderRateItem onClick={() => handleRateOrder(4)}/>
      <StyledOrderRateItem onClick={() => handleRateOrder(5)}/>
    </StyledOrderRate>
  )
}

export default OrderRate;