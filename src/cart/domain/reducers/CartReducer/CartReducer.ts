import type {Cart} from '@modules/cart/types';
import type {CartAction} from './CartReducer.types';

// Reducers
import cartItemReducer, {CartItemAction} from "@modules/cart/domain/reducers/CartItemReducer";

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
    case 'DECREMENT_QUANTITY':
    case 'EDIT_CUSTOMIZATION': {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? cartItemReducer(item, action as CartItemAction)
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
};

export default cartReducer;
