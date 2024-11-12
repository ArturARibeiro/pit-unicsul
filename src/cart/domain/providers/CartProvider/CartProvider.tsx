import {useCallback, useEffect, useMemo, useReducer} from 'react';

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

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useLocalStorage('cart', createEmptyCart());
  const [state, dispatch] = useReducer(cartReducer, cart);

  // Action functions
  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  }, []);

  const incrementQuantity = useCallback((id: string) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id } });
  }, []);

  const decrementQuantity = useCallback((id: string) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id } });
  }, []);

  const editCustomization = useCallback((id: string, customizations: CartCustomization[]) => {
    dispatch({ type: 'EDIT_CUSTOMIZATION', payload: { id, customizations } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const checkItem = useCallback((product_id: Product['id']) => {
    return state.items.find(item => item.product.id === product_id) ?? null;
  }, [state.items]);

  // Sync state with localStorage
  useEffect(() => {
    setCart(state);
  }, [state, setCart]);

  // Memoized context value
  const contextValue = useMemo(() => ({
    state,
    addItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    editCustomization,
    clearCart,
    checkItem,
  }), [state, addItem, removeItem, incrementQuantity, decrementQuantity, editCustomization, clearCart, checkItem]);

  return (
    <CartContext.Provider
      value={contextValue}
      children={children}
    />
  );
};

export default CartProvider;
