import { useMemo } from 'react';
import ActionLink from 'src/app/components/controls/ActionLink';
import { LOGIN_TYPE } from 'src/app/modules/Authentication/constants/loginType';

const { SIGN_IN, SIGN_UP } = LOGIN_TYPE;

interface UseActionLinkTypes {
  openSignInForm: () => void;
  openSignUpForm: () => void;
  modalType: string;
}

const useActionLink = ({ openSignInForm, openSignUpForm, modalType }: UseActionLinkTypes) => {
  const actionLinkProps = useMemo(
    () => ({
      [SIGN_IN]: {
        description: 'Not a member?',
        linkText: 'Join us.',
        onClick: openSignUpForm,
      },
      [SIGN_UP]: {
        description: 'Already a toxic?',
        linkText: 'Sign in.',
        onClick: openSignInForm,
      },
    }),
    [openSignInForm, openSignUpForm]
  );

  return useMemo(() => {
    const props = actionLinkProps[modalType] || {};
    return <ActionLink {...props} />;
  }, [modalType, actionLinkProps]);
};

export default useActionLink;
