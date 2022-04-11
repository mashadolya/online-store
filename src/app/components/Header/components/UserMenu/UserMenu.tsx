import React, { useState } from 'react';
import * as S from 'app/components/Header/components/UserMenu/UserMenu.style';
import LinkButton from 'app/components/controls/LinkButton/LinkButton';
import MENU_LINKS from 'app/components/Header/components/UserMenu/constants/menuLinks';
import Modal from 'app/components/Modal/Modal';
import SignInForm from 'app/modules/Authentication/components/SignInForm/SignInForm';
import RegistrationForm from 'app/modules/Authentication/components/RegistartionForm/RegistrationForm';

export interface IRegistrationUser {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const UserMenu = () => {
    const [modal, setModal] = useState(true);

    const [registrationForm, setRegistrationForm] = useState(false);
    const [signInForm, setSignInForm] = useState(true);
    const [successFulRegistration, setSuccessFulRegistration] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    const handleModal = () => {
        setModal(true);
        setSignInForm(true);
        setRegistrationForm(false);
    };

    const submitRegistrationForm = () => {
        if (successFulRegistration) {
            setModal(false);
            setSignInForm(false);
            setRegistrationForm(false);
        } else {
            // TODO: Change when completed PR
            alert('Duplicate User');
        }
    };

    const handleRegistrationForm = () => {
        setRegistrationForm(true);
        setSignInForm(false);
    };

    function onLoginSuccess() {
        setAuthenticated(true);
    }

    return (
        <S.UserMenuWrapper>
            <S.UserMenuItem>
                <LinkButton to={'/contactUs'} label={MENU_LINKS.CONTACT_US} />
            </S.UserMenuItem>
            <S.UserMenuItem>
                <a onClick={handleModal}>{MENU_LINKS.SIGN_IN}</a>
                <Modal visible={modal} setVisible={setModal}>
                    {signInForm && !registrationForm ? (
                        <SignInForm
                            onLoginSuccess={onLoginSuccess}
                            handleRegistrationForm={handleRegistrationForm}
                        />
                    ) : (
                        <RegistrationForm
                            setSuccessFulRegistration={setSuccessFulRegistration}
                            submitRegistrationForm={submitRegistrationForm}
                        />
                    )}
                </Modal>
            </S.UserMenuItem>
        </S.UserMenuWrapper>
    );
};

export default UserMenu;
