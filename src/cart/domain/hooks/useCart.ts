import {useContext} from "react";

// Contexts
import CartContext from "@modules/cart/domain/contexts/CartContext";

const useCart = () => {
  return useContext(CartContext);
}

export default useCart;