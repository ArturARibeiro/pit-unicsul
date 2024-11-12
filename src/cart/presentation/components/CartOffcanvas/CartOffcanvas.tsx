// Types
import type {CartOffcanvasProps} from "./CartOffcanvas.types";

// Components
import Each from "@common/presentation/components/atoms/Each";
import CartItemCard from "@modules/cart/presentation/components/CartItemCard";
import {CartItem} from "@modules/cart/types";
import Button from "@common/presentation/components/atoms/Button";
import {formatCurrency} from "@modules/product/domain/utils/money.ts";

const CartOffcanvas = ({items = [], onIncrement, onDecrement, onRemove, ...rest}: CartOffcanvasProps) => {
  const amount = items?.reduce((a, b) => a + b.amount, 0);

  const handleDecrementItemQuantity = (cartItem: CartItem) => {
    onDecrement?.(cartItem);
  }

  const handleIncrementItemQuantity = (cartItem: CartItem) => {
    onIncrement?.(cartItem);
  }

  const handleRemoveItemFromCart = (cartItem: CartItem) => {
    onRemove?.(cartItem);
  }

  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="cart-offcanvas" aria-labelledby="cart-offcanvas-label">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cart-offcanvas-label">Carrinho</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div {...rest} className={'offcanvas-body p-0 ' + rest?.className}>
        {items?.length ? (
          <Each data={items} render={item => (
            <CartItemCard
              data={item}
              onIncrement={() => handleIncrementItemQuantity(item)}
              onDecrement={() => handleDecrementItemQuantity(item)}
              onRemove={() => handleRemoveItemFromCart(item)}
            />
          )}/>
        ) : (
          <h6 className="text-center p-3 fw-normal">Não há produtos no carrinho</h6>
        )}
      </div>

      <div className="offcanvas-header d-flex flex-column gap-2">
        {Boolean(items.length) && (
          <div className="w-100 d-inline-flex justify-content-between align-items-center">
            <h3 className="m-0">Total: </h3>
            <h3 className="m-0 fw-normal">
              {formatCurrency(amount)}
            </h3>
          </div>
        )}
        <Button className="w-100" disabled={!items?.length}>Finalizar compra</Button>
      </div>
    </div>
  )
}

export default CartOffcanvas;