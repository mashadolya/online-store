import { useMemo } from 'react';
import NavIcons from 'src/app/components/Header/components/NavBar/components/NavIcons';
import Button from 'src/app/components/controls/Button';
import AuthModal from 'src/app/modules/Authentication/components/AuthModal/AuthModal';
import * as S from 'src/app/components/Header/components/NavBar/NavBar.styles';
import { useOpenClose } from 'src/app/hooks/useOpenClose';
import { useIsAuthorized } from 'src/app/hooks/useIsAuthorized';
import { useLogOut } from 'src/app/modules/Authentication/hooks/useLogOut';

const AUTH_BUTTON_LABELS = {
  SIGN_IN: 'Sign In',
  SIGN_OUT: 'Sign Out',
};

const NavBar = () => {
  const [opened, openAuthModal, closeAuthModal] = useOpenClose(false);
  const [isAuthorized] = useIsAuthorized();
  const [logOut] = useLogOut();

  const buttonProps = useMemo(
    () =>
      isAuthorized
        ? { onClick: logOut, label: AUTH_BUTTON_LABELS.SIGN_OUT }
        : { onClick: openAuthModal, label: AUTH_BUTTON_LABELS.SIGN_IN },
    [isAuthorized]
  );

  return (
    <S.NavBarContainer>
      <NavIcons />
      <S.SignInButtonContainer>
        <Button onClick={buttonProps.onClick}>{buttonProps.label}</Button>
      </S.SignInButtonContainer>
      <AuthModal opened={opened} doClose={closeAuthModal} />
    </S.NavBarContainer>
  );
};

export default NavBar;
