import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavIcons from 'src/app/components/Header/components/NavBar/components/NavIcons';
import Button from 'src/app/components/controls/Button';
import AuthModal from 'src/app/modules/Authentication/components/AuthModal/AuthModal';
import * as S from 'src/app/components/Header/components/NavBar/NavBar.styles';
import { useOpenClose } from 'src/app/hooks/useOpenClose';
import { useAuth } from 'src/app/hooks/useAuth';
import { useLogOut } from 'src/app/modules/Authentication/hooks/useLogOut';
import { RoutePaths } from 'src/app/routes/routes';

const AUTH_BUTTON_LABELS = {
  SIGN_IN: 'Sign In',
  SIGN_OUT: 'Sign Out',
};

const NavBar = () => {
  const navigate = useNavigate();
  const [opened, openAuthModal, closeAuthModal] = useOpenClose(false);
  const isAuthorized = useAuth();
  const [logOut] = useLogOut();

  const logOutHandler = useCallback(() => {
    logOut();
    navigate(RoutePaths.HOME);
  }, []);

  return (
    <S.NavBarContainer>
      <NavIcons />
      <S.SignInButtonContainer>
        <Button onClick={!isAuthorized ? openAuthModal : logOutHandler}>
          {!isAuthorized ? AUTH_BUTTON_LABELS.SIGN_IN : AUTH_BUTTON_LABELS.SIGN_OUT}
        </Button>
      </S.SignInButtonContainer>
      <AuthModal opened={opened} doClose={closeAuthModal} />
    </S.NavBarContainer>
  );
};

export default NavBar;
