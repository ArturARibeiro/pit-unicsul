import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

// Styled components
import {StyledRegisterPage, StyledRegisterPageForm} from "./RegisterPage.styles";

// Hooks
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

// Components
import Input from "@common/presentation/components/atoms/Input";
import Button from "@common/presentation/components/atoms/Button";

const RegisterPage = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const auth = useAuth();

  const passwordRule = "^(?=.*[0-9])(?=.*[!@#$%^&*(),.?\":{}|<>])[A-Za-z0-9!@#$%^&*(),.?\":{}|<>]{8,}$"

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = auth.register({
      email,
      phone,
      name,
      password,
    });

    if (success) {
      return navigate('/');
    }

    setError('Usuário já cadastrado na plataforma');
  }

  return (
    <StyledRegisterPage>

      <StyledRegisterPageForm onSubmit={handleFormSubmit}>
        <h4 className="mb-3">Cadastro</h4>

        <div className="row g-2">
          {Boolean(error.length) && (
            <div className="alert alert-warning text-center">{error}</div>
          )}
          <div className="col-12 d-flex flex-column">
            <label htmlFor="name">
              <small>Nome completo</small>
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Ex: João da Silva"
              onChange={e => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="col-12 d-flex flex-column">
            <label htmlFor="email">
              <small>E-mail</small>
            </label>
            <Input
              type="email"
              id="email"
              placeholder="email@dominio.com"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="col-12 d-flex flex-column">
            <label htmlFor="phone">
              <small>Celular</small>
            </label>
            <Input
              type="tel"
              id="phone"
              mask="99 99999-9999"
              placeholder="00 91234-5678"
              onChange={e => setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>
          <div className="col-12 d-flex flex-column mb-2">
            <label htmlFor="password">
              <small>Senha</small>
            </label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              onChange={e => setPassword(e.target.value)}
              title="A senha deve ter pelo menos 8 caracteres, incluindo um número e um símbolo."
              pattern={passwordRule}
              value={password}
              required
            />
          </div>
          <div className="col-12 d-flex flex-column gap-1">
            <Button type="submit" className="w-100">Acessar</Button>
            <Button type="button" className="w-100" variant="ghost">
              Já possuo uma conta
            </Button>
          </div>
        </div>

      </StyledRegisterPageForm>
    </StyledRegisterPage>
  )
}

export default RegisterPage;