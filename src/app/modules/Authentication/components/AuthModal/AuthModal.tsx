import { FC, useCallback, useEffect, useState } from 'react';
import Modal from 'src/app/components/Modal';
import SignInForm from 'src/app/modules/Authentication/components/SignInForm';
import SignUpForm from 'src/app/modules/Authentication/components/SignUpForm';
import useActionLink from 'src/app/modules/Authentication/hooks/useActionLink';
import { LOGIN_TYPE } from 'src/app/modules/Authentication/constants/loginType';
import { createSession } from 'src/app/services/sessionService';
import * as S from 'src/app/modules/Authentication/components/AuthModal/AuthModal.styles';
import {
    getUserFromStore,
    storeUser,
} from 'src/app/modules/Authentication/services/userLocalStorage';
import { createUser } from 'src/app/modules/Authentication/slices/authorizationSlice';
import { ErrorContainer } from 'src/app/pages/NotFoundPage/NotFoundPage.styles';
import { SignInData } from 'src/app/modules/Authentication/components/SignInForm/SignInForm.types';
import {
    INCORRECT_EMAIL_OR_PASSWORD,
    INCORRECT_PASSWORD,
} from 'src/app/modules/Authentication/components/AuthModal/constants/errorMessages';
import { AuthModalTypes } from 'src/app/modules/Authentication/components/AuthModal/AuthModal.types';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { SignUpFormTypes } from 'src/app/modules/Authentication/components/SignUpForm/SignUpForm.types';
const { SIGN_IN, SIGN_UP } = LOGIN_TYPE;

const AuthModal: FC<AuthModalTypes> = ({ opened, doClose }) => {
    const dispatch = useAppDispatch();
    const [modalType, setModalType] = useState(SIGN_IN);
    const [loginErrors, setLoginErrors] = useState('');

    const openSignUpForm = useCallback(() => setModalType(SIGN_UP), []);
    const openSignInForm = useCallback(() => setModalType(SIGN_IN), []);
    const closeModal = useCallback(() => {
        doClose();
        setModalType(SIGN_IN);
    }, []);

    useEffect(() => {
        return () => {
            setLoginErrors('');
        };
    }, [opened]);

    const Form = modalType === SIGN_IN ? SignInForm : SignUpForm;
    const ActionLink = useActionLink({ openSignInForm, openSignUpForm, modalType });

    const signInUser = useCallback((values: SignInData) => {
        const userStored = getUserFromStore(values?.email);
        if (!userStored) {
            setLoginErrors(INCORRECT_EMAIL_OR_PASSWORD);
        }
        if (values.password !== userStored.password) {
            setLoginErrors(INCORRECT_PASSWORD);
            return;
        }
        dispatch(createUser(values));
        createSession(values);
        doClose();
    }, []);

    const signUpUser = useCallback((values: SignUpFormTypes) => {
        const userStored = getUserFromStore(values?.email);
        if (!userStored) {
            const { confirmPassword, ...currentUser } = values;
            storeUser(currentUser);
            dispatch(createUser(currentUser));
            createSession(currentUser);
        }
        doClose();
    }, []);

    const onSubmit = modalType === SIGN_IN ? signInUser : signUpUser;

    return (
        <Modal visible={opened} doClose={closeModal}>
            <S.FormContainer>
                {loginErrors && <ErrorContainer>{loginErrors}</ErrorContainer>}
                <Form onSubmit={onSubmit} />
                {ActionLink}
            </S.FormContainer>
        </Modal>
    );
};

export default AuthModal;
