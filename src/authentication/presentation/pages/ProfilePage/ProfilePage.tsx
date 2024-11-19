// Hooks
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

// Styled Components
import {
  StyledProfilePage,
  StyledProfilePageEmail,
  StyledProfilePageName,
  StyledProfilePagePicture
} from "./ProfilePage.styles";
import Button from "@common/presentation/components/atoms/Button";

const ProfilePage = () => {
  const {identity, logout} = useAuth();

  const handleDoLogout = () => {
    if (confirm("Tem certeza que deseja sair?")) {
      logout();
    }
  }

  return Boolean(identity) && (
    <StyledProfilePage className="container">
      <StyledProfilePagePicture src="/profile.jpg"/>
      <StyledProfilePageName children={identity?.name}/>
      <StyledProfilePageEmail children={identity?.email}/>
      <Button className="my-2" onClick={handleDoLogout}>Sair</Button>
    </StyledProfilePage>
  )
}

export default ProfilePage;