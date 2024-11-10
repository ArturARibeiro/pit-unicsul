import {createContext} from "react";

// Types
import {CartItemContextData} from "./CartItemContext.types";

const CartItemContext = createContext<CartItemContextData>({} as CartItemContextData)

export default CartItemContext;