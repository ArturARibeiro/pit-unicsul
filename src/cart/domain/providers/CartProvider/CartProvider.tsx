import {useEffect, useReducer} from 'react';

// Types
import {CartProviderProps} from "./CartProvider.types";
import {CartCustomization, CartItem} from '@modules/cart/types';
import {Product} from "@modules/product/types";

// Contexts
import CartContext from '@modules/cart/domain/contexts/CartContext';

// Hooks
import {useLocalStorage} from "usehooks-ts";

// Reducers
import cartReducer from '@modules/cart/domain/reducers/CartReducer';

// DTOs
import {createEmptyCart} from "src/cart/data/dtos/CartDto";

export const CartProvider = ({children}: CartProviderProps) => {
  const [cart, setCart] = useLocalStorage('cart', createEmptyCart());
  const [state, dispatch] = useReducer(cartReducer, cart);

  const addItem = (item: CartItem) => {
    dispatch({type: 'ADD_ITEM', payload: item});
  };

  const removeItem = (id: string) => {
    dispatch({type: 'REMOVE_ITEM', payload: {id}});
  };

  const incrementQuantity = (id: string) => {
    dispatch({type: 'INCREMENT_QUANTITY', payload: {id}});
  };

  const decrementQuantity = (id: string) => {
    dispatch({type: 'DECREMENT_QUANTITY', payload: {id}});
  };

  const editCustomization = (id: string, customizations: CartCustomization[]) => {
    dispatch({type: 'EDIT_CUSTOMIZATION', payload: {id, customizations}});
  };

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'});
  };

  const checkItem = (product_id: Product['id']) => {
    return state.items.find(item => item.product.id === product_id) ?? null;
  }

  useEffect(() => {
    setCart(state);
  }, [state, setCart]);

  return (
    <CartContext.Provider
      children={children}
      value={{
        state,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
        editCustomization,
        clearCart,
        checkItem,
      }}
    />
  );
};

export default CartProvider;