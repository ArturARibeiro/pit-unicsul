// Hooks
import useCart from "@modules/cart/domain/hooks/useCart.ts";

// Utils
import {formatCurrency} from "@modules/product/domain/utils/money.ts";

// Components
import CartItemCard from "@modules/cart/presentation/components/CartItemCard";
import Each from "@common/presentation/components/atoms/Each";
import Input from "@common/presentation/components/atoms/Input";
import Button from "@common/presentation/components/atoms/Button";

// Styled components
import {StyledCheckoutPageForm, StyledCheckoutPageReview} from "./CheckoutPage.styles";

const CheckoutPage = () => {
  const {state} = useCart();
  const total = state.items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-12 col-md-8 d-flex flex-column gap-3">
          <StyledCheckoutPageForm>
            <div className="row g-2">
              <div className="col-12">
                <h5>Dados pessoais</h5>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  Nome completo:
                  <Input type="text" placeholder="João da silva"/>
                </label>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  Celular:
                  <Input type="tel" placeholder="11 91234-5678"/>
                </label>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  E-mail:
                  <Input type="email" placeholder="Ex: email@gmail.com"/>
                </label>
              </div>
            </div>
          </StyledCheckoutPageForm>

          <StyledCheckoutPageForm>
            <div className="row g-2">
              <div className="col-12">
                <h5>Dados de entrega</h5>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  Nome completo:
                  <Input type="text" placeholder="João da silva"/>
                </label>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  Celular:
                  <Input type="tel" placeholder="11 91234-5678"/>
                </label>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  E-mail:
                  <Input type="email" placeholder="Ex: email@gmail.com"/>
                </label>
              </div>
            </div>
          </StyledCheckoutPageForm>

          <StyledCheckoutPageForm>
            <div className="row g-2">
              <div className="col-12">
                <h5>Dados de pagamento</h5>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  Número do cartão:
                  <Input type="text" placeholder="João da silva"/>
                </label>
              </div>
              <div className="col-6">
                <label className="d-flex flex-column w-100">
                  Data de validade:
                  <Input type="tel" placeholder="11 91234-5678"/>
                </label>
              </div>
              <div className="col-6">
                <label className="d-flex flex-column w-100">
                  CVV:
                  <Input type="email" placeholder="Ex: email@gmail.com"/>
                </label>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  Nome impresso no cartão:
                  <Input type="text" placeholder="João da silva"/>
                </label>
              </div>
            </div>
          </StyledCheckoutPageForm>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column gap-3">
          <StyledCheckoutPageReview>
            <h6 className="px-3 pt-3">Resumo</h6>
            <Each data={state.items} render={item => (
              <CartItemCard data={item}/>
            )}/>

            <div className="d-inline-flex justify-content-between px-3 py-2">
              <span className="fw-bold">Total:</span> {formatCurrency(total)}
            </div>
          </StyledCheckoutPageReview>

          <Button className="w-100">
            Finalizar compra
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage;