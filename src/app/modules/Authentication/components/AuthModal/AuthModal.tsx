import { FC, useCallback, useEffect, useState } from 'react';
import Modal from 'src/app/components/Modal';
import UniversalForm from 'src/app/modules/Authentication/components/UniversalForm';
import useActionLink from 'src/app/modules/Authentication/hooks/useActionLink';
import { LOGIN_TYPE } from 'src/app/modules/Authentication/constants/loginType';
import * as S from 'src/app/modules/Authentication/components/AuthModal/AuthModal.styles';
import { ErrorContainer } from 'src/app/pages/NotFoundPage/NotFoundPage.styles';
import { AuthModalTypes } from 'src/app/modules/Authentication/components/AuthModal/AuthModal.types';
import SIGN_IN_FORM_CONFIG from 'src/app/forms/signInForm';
import SIGN_UP_FORM_CONFIG from 'src/app/forms/signUpForm';
import { useSignUp } from 'src/app/modules/Authentication/hooks/useSignUp';
import { useSignIn } from 'src/app/modules/Authentication/hooks/useSignIn';

const { SIGN_IN, SIGN_UP } = LOGIN_TYPE;

const CONFIG = {
  [SIGN_UP]: SIGN_UP_FORM_CONFIG,
  [SIGN_IN]: SIGN_IN_FORM_CONFIG,
};

const AuthModal: FC<AuthModalTypes> = ({ opened, doClose }) => {
  const [modalType, setModalType] = useState(SIGN_IN);
  const [loginErrors, setLoginErrors] = useState('');

  const openSignUpForm = useCallback(() => setModalType(SIGN_UP), []);
  const openSignInForm = useCallback(() => setModalType(SIGN_IN), []);

  const closeModal = useCallback(() => {
    doClose();
    setModalType(SIGN_IN);
  }, []);

  // TODO: UseUnmountCallback
  useEffect(() => {
    return () => {
      setLoginErrors('');
    };
  }, [opened]);

  const ActionLink = useActionLink({ openSignInForm, openSignUpForm, modalType });

  const signInUser = useSignIn(doClose, setLoginErrors);
  const signUpUser = useSignUp(doClose, setLoginErrors);
  const onSubmit = modalType === SIGN_IN ? signInUser : signUpUser;

  return (
    <Modal visible={opened} doClose={closeModal}>
      <S.FormContainer>
        {loginErrors && <ErrorContainer>{loginErrors}</ErrorContainer>}
        <UniversalForm onSubmit={onSubmit} config={CONFIG[modalType]} />
        {ActionLink}
      </S.FormContainer>
    </Modal>
  );
};

export default AuthModal;
