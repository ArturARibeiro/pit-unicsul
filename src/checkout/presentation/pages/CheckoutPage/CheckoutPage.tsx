import {useNavigate} from "react-router-dom";

// Services
import OrderService from "@modules/order/data/services/OrderService/OrderService.ts";

// Hooks
import useCart from "@modules/cart/domain/hooks/useCart.ts";
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

// Utils
import {formatCurrency} from "@modules/product/domain/utils/money.ts";

// Components
import CreateAddress from "@modules/checkout/presentation/components/CreateAddress";
import CartItemCard from "@modules/cart/presentation/components/CartItemCard";
import Each from "@common/presentation/components/atoms/Each";
import Button from "@common/presentation/components/atoms/Button";
import SelectList from "@modules/checkout/presentation/components/Select";

// Styled components
import {StyledCheckoutPageForm, StyledCheckoutPageReview} from "./CheckoutPage.styles";
import {useMemo, useState} from "react";
import {Address, Card} from "@modules/user/types";
import AddressService from "@modules/user/data/services/AddressService";
import CreateCard from "@modules/checkout/presentation/components/CreateCard/CreateCard.tsx";
import {CreateCardForm} from "@modules/checkout/presentation/components/CreateCard/CreateCard.types.ts";
import CardService from "@modules/user/data/services/CardService/CardService.ts";

const CheckoutPage = () => {
  // Hooks
  const {identity} = useAuth();
  const {state, clearCart} = useCart();

  const total = state.items.reduce((acc, item) => acc + item.amount, 0);
  const navigate = useNavigate();

  // States
  const [addresses, setAddresses] = useState<Address[]>(identity?.addresses ?? []);
  const [cards, setCards] = useState<Card[]>(identity?.cards ?? []);
  const [addressId, setAddressId] = useState<string>();
  const [cardId, setCardId] = useState<string>();
  const [addingNewAddress, setAddingNewAddress] = useState<boolean>(addresses.length == 0);
  const [addingNewCard, setAddingNewCard] = useState<boolean>(cards.length == 0);

  const addressSelectItems = useMemo(() => (
    addresses.flatMap(a => ({name: a.name, value: a.id, caption: a.mounted}))
  ), [addresses]);

  const cardSelectItems = useMemo(() => (
    cards.flatMap(a => ({name: a.name, value: a.id, caption: a.number}))
  ), [cards]);

  const handleOnSelectAddress = (addressId: string) => {
    setAddressId(() => addressId);
  }

  const handleOnSelectCard = (cardId: string) => {
    setCardId(() => cardId);
  }

  const handleSetAddingNewAddress = () => {
    setAddingNewAddress(true);
  }

  const handleSetAddingNewCard = () => {
    setAddingNewCard(true);
  }

  const handleAddNewAddress = (data: Omit<Address, 'id'>) => {
    AddressService.create(data).then(address => {
      setAddresses(prev => [...prev, address]);
      setAddingNewAddress(false);
      setAddressId(address.id);
    });
  }

  const handleAddNewCard = (data: CreateCardForm) => {
    CardService.create(data).then(card => {
      setCards(prev => [...prev, card]);
      setAddingNewCard(false);
      setCardId(card.id);
    });
  }

  const handleFinishOrder = () => {
    if (addressId && cardId) {
      const request = OrderService.create({
        address_id: addressId,
        card_id: cardId,
        items: state.items.flatMap(item => ({
          product_id: item.product.id,
          quantity: item.quantity,
          amount: item.amount,
        }))
      })

      request.then(response => {
        clearCart();
        navigate(`/orders/${response.id}`);
      })
    }
  };

  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-12 col-lg-8 d-flex flex-column gap-3">
          <div className="row g-4">

            {addingNewCard ? (
              <div className="col-12">
                <StyledCheckoutPageForm>
                  <h5>Novo cartão</h5>
                  <div className="row g-2">
                    <div className="col-12">
                      <CreateCard onCreate={handleAddNewCard}/>
                    </div>
                  </div>
                </StyledCheckoutPageForm>
              </div>
            ) : (
              <div className="col-12 d-flex flex-column gap-2">
                <h5>Forma de pagamento</h5>
                <SelectList
                  value={cardId}
                  onChange={handleOnSelectCard}
                  items={cardSelectItems}
                />

                <Button variant="ghost" className="w-100" onClick={handleSetAddingNewCard}>
                  Adicionar cartão
                </Button>
              </div>
            )}

            {addingNewAddress ? (
              <div className="col-12">
                <StyledCheckoutPageForm>
                  <h5>Novo endereço</h5>
                  <div className="row g-2">
                    <div className="col-12">
                      <CreateAddress onCreate={handleAddNewAddress}/>
                    </div>
                  </div>
                </StyledCheckoutPageForm>
              </div>
            ) : (
              <div className="col-12 d-flex flex-column gap-2">
                <h5>Endereço de entrega</h5>

                <SelectList
                  value={addressId}
                  onChange={handleOnSelectAddress}
                  items={addressSelectItems}
                />

                <Button variant="ghost" className="w-100" onClick={handleSetAddingNewAddress}>
                  Adicionar endereço
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="col-12 col-lg-4 d-flex flex-column gap-3">
          <StyledCheckoutPageReview>
            <h6 className="px-3 pt-3">Resumo</h6>
            <Each data={state.items} render={(item) => <CartItemCard data={item}/>}/>
            <div className="d-inline-flex justify-content-between px-3 py-2">
              <span className="fw-bold">Total:</span> {formatCurrency(total)}
            </div>
          </StyledCheckoutPageReview>
          <Button className="w-100" onClick={handleFinishOrder} disabled={!addressId || !cardId}>
            Finalizar compra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
