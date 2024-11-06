import {createContext} from 'react';

// Types
import type {CartContextData} from "./CartContext.types";

const CartContext = createContext<CartContextData>({} as CartContextData);

export default CartContext;