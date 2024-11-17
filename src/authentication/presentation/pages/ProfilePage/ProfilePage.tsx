// Hooks
import useAuth from "@modules/authentication/domain/hooks/useAuth.ts";

// Styled Components
import {
  StyledProfilePage,
  StyledProfilePageEmail,
  StyledProfilePageName,
  StyledProfilePagePicture
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const {identity} = useAuth();

  return Boolean(identity) && (
    <StyledProfilePage className="container">
      <StyledProfilePagePicture src="/profile.jpg"/>
      <StyledProfilePageName children={identity?.name}/>
      <StyledProfilePageEmail children={identity?.email}/>
    </StyledProfilePage>
  )
}

export default ProfilePage;