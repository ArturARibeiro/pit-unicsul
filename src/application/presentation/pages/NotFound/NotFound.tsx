import Button from "@common/presentation/components/atoms/Button";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center flex-grow-1">
      <h1 className="display-1 fw-bolder">404</h1>
      <h5 className="fw-bolder">Página não encontrada</h5>
      <p className="text-center">Parece que você se perdeu! 🧐 Volte para a página inicial e tente novamente.</p>
      <Button onClick={handleBackToHome}>
        <i className="bi bi-arrow-left"></i>
        Voltar ao início
      </Button>
    </div>
  )
}

export default NotFound;