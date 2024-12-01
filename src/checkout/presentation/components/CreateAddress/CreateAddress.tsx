import {useEffect, useState} from "react";
import Input from "@common/presentation/components/atoms/Input";
import {Address} from "@modules/user/types";
import {CreateAddressProps} from "@modules/checkout/presentation/components/CreateAddress/CreateAddress.types.ts";
import Button from "@common/presentation/components/atoms/Button";

const initialValues = {
  zip_code: "",
  city: "",
  district: "",
  mounted: "",
  name: "",
  number: "",
  state: "",
  street: "",
  complement: "",
};

const CreateAddress = ({ onCreate }: CreateAddressProps) => {
  const [zipCodeError, setZipCodeError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string | null>>({});
  const [isLoadingAddress, setIsLoadingAddress] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<Address, "id">>(initialValues);

  const validateForm = () => {
    const errors: Record<string, string | null> = {};

    if (!/^\d{5}-\d{3}$/.test(formData.zip_code)) {
      errors.zip_code = "CEP inválido.";
    }
    if (!formData.street.trim()) {
      errors.street = "Rua é obrigatória.";
    }
    if (!formData.district.trim()) {
      errors.district = "Bairro é obrigatório.";
    }
    if (!formData.city.trim()) {
      errors.city = "Cidade é obrigatória.";
    }
    if (!formData.state.trim() || formData.state.length !== 2) {
      errors.state = "Estado deve ter 2 caracteres.";
    }
    if (!formData.number.trim()) {
      errors.number = "Número é obrigatório.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onCreate?.(formData);
    }
  };

  const setAttribute = (field: keyof Omit<Address, "id">, value: Address[keyof Address]) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors((prev) => ({ ...prev, [field]: null })); // Remove o erro ao alterar o campo
  };

  useEffect(() => {
    const fetchAddress = async () => {
      if (!/^\d{5}-\d{3}$/.test(formData.zip_code)) {
        setZipCodeError("CEP inválido.");
        setFormData((prev) => ({ ...prev, address: "", complement: "" }));
        return;
      }

      setIsLoadingAddress(true);
      setZipCodeError(null);

      try {
        const response = await fetch(`https://viacep.com.br/ws/${formData.zip_code}/json/`);
        const data = await response.json();

        if (data.erro) {
          setZipCodeError("CEP não encontrado.");
          setFormData(() => initialValues);
        } else {
          setFormData((prev) => ({
            ...prev,
            zip_code: data.cep,
            state: data.uf,
            city: data.localidade,
            district: data.bairro,
            street: data.logradouro,
          }));
        }
      } catch (e) {
        setZipCodeError("Erro ao buscar o CEP.");
        console.error(e);
      } finally {
        setIsLoadingAddress(false);
      }
    };

    if (formData.zip_code) {
      fetchAddress();
    }
  }, [formData.zip_code]);

  return (
    <div className="row g-2">
      <div className="col-12">
        <label className="d-flex flex-column w-100">
          <small>Nome</small>
          <Input
            type="text"
            placeholder="Ex: Casa, Trabalho"
            value={formData.name}
            onChange={e => setAttribute("name", e.target.value)}
            required
          />
        </label>
        {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
      </div>
      <div className="col-12 col-lg-2">
        <label className="d-flex flex-column w-100">
          <small>CEP</small>
          <Input
            type="text"
            inputMode="numeric"
            placeholder="12345-689"
            mask="99999-999"
            value={formData.zip_code}
            onChange={e => setAttribute("zip_code", e.target.value)}
            required
          />
        </label>
        {zipCodeError && <small className="text-danger">{zipCodeError}</small>}
        {formErrors.zip_code && <small className="text-danger">{formErrors.zip_code}</small>}
      </div>
      <div className="col-12 col-lg-7">
        <label className="d-flex flex-column w-100">
          <small>Rua</small>
          <Input
            type="text"
            placeholder="Av. 8 de novembro"
            value={formData.street}
            onChange={e => setAttribute("street", e.target.value)}
            disabled={isLoadingAddress}
            required
          />
        </label>
        {formErrors.street && <small className="text-danger">{formErrors.street}</small>}
      </div>
      <div className="col-12 col-lg-3">
        <label className="d-flex flex-column w-100">
          <small>Número</small>
          <Input
            type="text"
            placeholder="123"
            value={formData.number}
            onChange={e => setAttribute("number", e.target.value)}
          />
        </label>
        {formErrors.number && <small className="text-danger">{formErrors.number}</small>}
      </div>
      <div className="col-12">
        <label className="d-flex flex-column w-100">
          <small>Bairro</small>
          <Input
            type="text"
            placeholder="Jd. Vale dos patos"
            value={formData.district}
            onChange={e => setAttribute("district", e.target.value)}
            disabled={isLoadingAddress}
            required
          />
        </label>
        {formErrors.district && <small className="text-danger">{formErrors.district}</small>}
      </div>
      <div className="col-12 col-lg-10">
        <label className="d-flex flex-column w-100">
          <small>Cidade</small>
          <Input
            type="text"
            placeholder="São Paulo"
            value={formData.city}
            onChange={e => setAttribute("city", e.target.value)}
            disabled={isLoadingAddress}
            required
          />
        </label>
        {formErrors.city && <small className="text-danger">{formErrors.city}</small>}
      </div>
      <div className="col-12 col-lg-2">
        <label className="d-flex flex-column w-100">
          <small>Estado</small>
          <Input
            type="text"
            placeholder="SP"
            value={formData.state}
            onChange={e => setAttribute("state", e.target.value)}
            disabled={isLoadingAddress}
            maxLength={2}
            required
          />
        </label>
        {formErrors.state && <small className="text-danger">{formErrors.state}</small>}
      </div>
      <div className="col-12">
        <label className="d-flex flex-column w-100">
          <small>Complemento</small>
          <Input
            type="text"
            placeholder="Apto. 12"
            value={formData.complement ?? ""}
            onChange={e => setAttribute("complement", e.target.value)}
            disabled={isLoadingAddress}
          />
        </label>
      </div>
      <div className="col-12">
        <Button onClick={handleSubmit}>
          Criar Endereço
        </Button>
      </div>
    </div>
  );
};

export default CreateAddress;
