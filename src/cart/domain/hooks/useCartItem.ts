import {useContext} from "react";

// Contexts
import CartItemContext from "@modules/cart/domain/contexts/CartItemContext";

const useCartItem = () => {
  return useContext(CartItemContext);
}

export default useCartItem;