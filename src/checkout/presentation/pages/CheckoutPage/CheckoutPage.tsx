import {ChangeEvent, useEffect, useState} from "react";
import {useLocalStorage} from "usehooks-ts";
import {useNavigate} from "react-router-dom";

// Types
import {Order} from "@modules/order/types";

// DTOs
import {createFromCart} from "@modules/order/data/dtos/OrderDto";

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
  const { state, clearCart } = useCart();
  const [, setOrders] = useLocalStorage<Order[]>("orders", []);
  const total = state.items.reduce((acc, item) => acc + item.amount, 0);
  const navigate = useNavigate();

  const [form_data, setFormData] = useState({
    card_number: "",
    expiration_date: "",
    cvv: "",
    card_name: "",
    cep: "",
    address: "",
    number: "",
    complement: "",
  });

  const [is_form_valid, setIsFormValid] = useState(false);
  const [is_loading_address, setIsLoadingAddress] = useState(false);
  const [cep_error, setCepError] = useState<string | null>(null);

  const validateForm = () => {
    const {
      card_number,
      expiration_date,
      cvv,
      card_name,
      cep,
      address,
      number,
    } = form_data;

    const isCardNumberValid = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(card_number);
    const isExpirationDateValid = /^\d{4}-\d{2}$/.test(expiration_date);
    const isCvvValid = /^[0-9]{3}$/.test(cvv);
    const isCardNameValid = card_name.trim() !== "";
    const isCepValid = /^\d{5}-\d{3}$/.test(cep);
    const isAddressValid = address.trim() !== "";
    const isNumberValid = number.trim() !== "";

    const isValid =
      isCardNumberValid &&
      isExpirationDateValid &&
      isCvvValid &&
      isCardNameValid &&
      isCepValid &&
      isAddressValid &&
      isNumberValid;

    setIsFormValid(isValid);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  const handleFinishOrder = () => {
    const order = createFromCart(state, {
      address: form_data.address,
      zip_code: form_data.cep,
      number: form_data.number,
      complement: form_data.complement,
    });

    setOrders((prev) => [...prev, order]);
    clearCart();
    navigate(`/orders/${order.id}`);
  };

  useEffect(() => {
    validateForm();
  }, [form_data]);

  useEffect(() => {
    const fetchAddress = async () => {
      if (!/^\d{5}-\d{3}$/.test(form_data.cep)) {
        setCepError("CEP inválido.");
        setFormData((prev) => ({ ...prev, address: "", complement: "" }));
        return;
      }

      setIsLoadingAddress(true);
      setCepError(null);

      try {
        const response = await fetch(`https://viacep.com.br/ws/${form_data.cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setCepError("CEP não encontrado.");
          setFormData((prev) => ({ ...prev, address: "", complement: "" }));
        } else {
          setFormData((prev) => ({
            ...prev,
            address: `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`,
            complement: data.complemento || "",
          }));
        }
      } catch (error) {
        setCepError("Erro ao buscar o CEP.");
      } finally {
        setIsLoadingAddress(false);
      }
    };

    if (form_data.cep) {
      fetchAddress();
    }
  }, [form_data.cep]);

  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-12 col-lg-8 d-flex flex-column gap-3">
          <StyledCheckoutPageForm>
            <div className="row g-2">
              <div className="col-12">
                <h5>Dados de pagamento</h5>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  <small>Número do cartão</small>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="1234 5678 1234 5678"
                    mask="9999 9999 9999 9999"
                    value={form_data.card_number}
                    onChange={(e) => handleInputChange(e, "card_number")}
                  />
                </label>
              </div>
              <div className="col-6">
                <label className="d-flex flex-column w-100">
                  <small>Data de validade</small>
                  <Input
                    type="month"
                    placeholder="01/2030"
                    value={form_data.expiration_date}
                    onChange={(e) => handleInputChange(e, "expiration_date")}
                  />
                </label>
              </div>
              <div className="col-6">
                <label className="d-flex flex-column w-100">
                  <small>CVV</small>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="123"
                    mask="999"
                    value={form_data.cvv}
                    onChange={(e) => handleInputChange(e, "cvv")}
                  />
                </label>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  <small>Nome impresso no cartão</small>
                  <Input
                    type="text"
                    placeholder="João da silva"
                    value={form_data.card_name}
                    onChange={(e) => handleInputChange(e, "card_name")}
                  />
                </label>
              </div>
            </div>
          </StyledCheckoutPageForm>

          <StyledCheckoutPageForm>
            <div className="row g-2">
              <div className="col-12">
                <h5>Dados de entrega</h5>
              </div>
              <div className="col-12 col-lg-2">
                <label className="d-flex flex-column w-100">
                  <small>CEP</small>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="12345-689"
                    mask="99999-999"
                    value={form_data.cep}
                    onChange={(e) => handleInputChange(e, "cep")}
                  />
                </label>
                {cep_error && <small className="text-danger">{cep_error}</small>}
              </div>
              <div className="col-12 col-lg-7">
                <label className="d-flex flex-column w-100">
                  <small>Endereço</small>
                  <Input
                    type="text"
                    placeholder="Av. 8 de novembro"
                    value={form_data.address}
                    onChange={(e) => handleInputChange(e, "address")}
                    disabled={is_loading_address}
                  />
                </label>
              </div>
              <div className="col-12 col-lg-3">
                <label className="d-flex flex-column w-100">
                  <small>Número</small>
                  <Input
                    type="text"
                    placeholder="1234"
                    value={form_data.number}
                    onChange={(e) => handleInputChange(e, "number")}
                  />
                </label>
              </div>
              <div className="col-12">
                <label className="d-flex flex-column w-100">
                  <small>Complemento</small>
                  <Input
                    type="text"
                    placeholder="Apto. 12"
                    value={form_data.complement}
                    onChange={(e) => handleInputChange(e, "complement")}
                    disabled={is_loading_address}
                  />
                </label>
              </div>
            </div>
          </StyledCheckoutPageForm>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-3">
          <StyledCheckoutPageReview>
            <h6 className="px-3 pt-3">Resumo</h6>
            <Each data={state.items} render={(item) => <CartItemCard data={item} />} />
            <div className="d-inline-flex justify-content-between px-3 py-2">
              <span className="fw-bold">Total:</span> {formatCurrency(total)}
            </div>
          </StyledCheckoutPageReview>
          <Button className="w-100" onClick={handleFinishOrder} disabled={!is_form_valid}>
            Finalizar compra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
