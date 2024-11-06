// Types
import type {Cart} from '@modules/cart/types';
import type {CartAction} from './CartReducer.types';

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {...item, quantity: item.quantity + item.product.quantityGap}
            : item
        ),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? {...item, quantity: Math.max(item.quantity - item.product.quantityGap, 0)}
            : item
        ),
      };
    case 'EDIT_CUSTOMIZATION':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {...item, selectedCustomizations: action.payload.customizations}
            : item
        ),
      };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
};

export default cartReducer;