import {useState} from "react";

// Types
import {CreateCardForm, CreateCardProps} from "./CreateCard.types";

// Components
import Input from "@common/presentation/components/atoms/Input";
import Select from "@common/presentation/components/atoms/Select";
import Button from "@common/presentation/components/atoms/Button";

const initialValues: CreateCardForm = {
  type: "credit",
  name: "",
  number: "",
  cvv: "",
  validity: "",
};

const CreateCard = ({ onCreate }: CreateCardProps) => {
  const [formData, setFormData] = useState<CreateCardForm>(initialValues);
  const [errors, setErrors] = useState<{ [key in keyof CreateCardForm]?: string }>({});

  const setAttribute = (field: keyof CreateCardForm, value: CreateCardForm[keyof CreateCardForm]) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    const newErrors: { [key in keyof CreateCardForm]?: string } = {};

    if (!formData.number || !/^\d{16}$/.test(formData.number.replace(/\s/g, ""))) {
      newErrors.number = "Número do cartão inválido (16 dígitos).";
    }

    if (!formData.validity || !/^\d{4}-\d{2}$/.test(formData.validity)) {
      newErrors.validity = "Data de validade inválida.";
    } else {
      const [year, month] = formData.validity.split("-").map(Number);
      const today = new Date();
      if (new Date(year, month - 1) < new Date(today.getFullYear(), today.getMonth())) {
        newErrors.validity = "O cartão está vencido.";
      }
    }

    if (!formData.cvv || !/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV inválido (3 dígitos).";
    }

    if (!formData.name.trim()) {
      newErrors.name = "O nome não pode estar vazio.";
    }

    if (!formData.type) {
      newErrors.type = "O tipo do cartão é obrigatório.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onCreate?.(formData);
    }
  };

  return (
    <div className="row g-2">
      <div className="col-12">
        <label className="d-flex flex-column w-100">
          <small>Tipo do cartão</small>
          <Select
            value={formData.type}
            onChange={(e) => setAttribute("type", e.target.value)}
            options={[
              { name: "Crédito", value: "credit" },
              { name: "Débito", value: "debit" },
            ]}
          />
          {errors.type && <small className="text-danger">{errors.type}</small>}
        </label>
      </div>
      <div className="col-12">
        <label className="d-flex flex-column w-100">
          <small>Número do cartão</small>
          <Input
            type="text"
            inputMode="numeric"
            placeholder="1234 5678 1234 5678"
            mask="9999 9999 9999 9999"
            value={formData.number}
            onChange={(e) => setAttribute("number", e.target.value)}
          />
          {errors.number && <small className="text-danger">{errors.number}</small>}
        </label>
      </div>
      <div className="col-6">
        <label className="d-flex flex-column w-100">
          <small>Data de validade</small>
          <Input
            type="month"
            placeholder="01/2030"
            value={formData.validity}
            onChange={(e) => setAttribute("validity", e.target.value)}
          />
          {errors.validity && <small className="text-danger">{errors.validity}</small>}
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
            value={formData.cvv}
            onChange={(e) => setAttribute("cvv", e.target.value)}
          />
          {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
        </label>
      </div>
      <div className="col-12">
        <label className="d-flex flex-column w-100">
          <small>Nome impresso no cartão</small>
          <Input
            type="text"
            placeholder="João da Silva"
            value={formData.name}
            onChange={(e) => setAttribute("name", e.target.value)}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </label>
      </div>
      <div className="col-12">
        <Button onClick={handleSubmit}>Adicionar Cartão</Button>
      </div>
    </div>
  );
};

export default CreateCard;
