import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

// Components
import Input from "@common/presentation/components/atoms/Input";
import Button from "@common/presentation/components/atoms/Button";

// Styled components
import {StyledLoginPage, StyledLoginPageForm} from "./LoginPage.styles";
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const auth = useAuth();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (auth.login(email, password)) {
      return navigate('/');
    }

    setError('Usuário(a) não encontrado!');
  }

  const handleGoToHomePage = () => {
    navigate("/");
  }

  const handleGoToRegisterPage = () => {
    navigate("/register");
  }

  return (
    <StyledLoginPage>
      <StyledLoginPageForm onSubmit={handleFormSubmit}>
        <div className="d-flex align-items-center gap-3 mb-3">
          <Button variant="ghost" onClick={handleGoToHomePage} className="p-2">
            <i className="bi bi-arrow-left"></i>
          </Button>
          <h4 className="m-0">Login</h4>
        </div>

        <div className="row g-2">
          {Boolean(error.length) && (
            <div className="alert alert-warning text-center">{error}</div>
          )}
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
          <div className="col-12 d-flex flex-column mb-2">
            <label htmlFor="password">
              <small>Senha</small>
            </label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              onChange={e => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="col-12 d-flex flex-column gap-1">
            <Button type="submit" className="w-100">Acessar</Button>
            <Button type="button" className="w-100" variant="outline" onClick={handleGoToRegisterPage}>
              Criar uma conta
            </Button>
          </div>
        </div>
      </StyledLoginPageForm>
    </StyledLoginPage>
  )
}

export default LoginPage;