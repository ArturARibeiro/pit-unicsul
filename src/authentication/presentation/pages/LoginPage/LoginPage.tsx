// Components

// Styled components
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

const LoginPage = () => {
  const auth = useAuth();
  auth.login();
  return <></>
}

export default LoginPage;