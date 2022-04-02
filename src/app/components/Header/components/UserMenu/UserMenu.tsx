import React, { useState } from 'react';
import * as S from 'app/components/Header/components/UserMenu/UserMenu.style';
import LinkButton from 'app/components/controls/LinkButton/LinkButton';
import MENU_LINKS from 'app/components/Header/components/UserMenu/constants/menuLinks';
import Modal from 'app/components/Modal/Modal';
import SignInForm from 'app/modules/Authentication/components/SignInForm/SignInForm';

const UserMenu = () => {
    const [modal, setModal] = useState(true);
    const [registrationForm, setRegistrationForm] = useState(false);

    const handleRegistrationForm = () => {
        setModal(false);
        setRegistrationForm(true);
    };

    return (
        <S.UserMenuWrapper>
            <S.UserMenuItem>
                <LinkButton to={'/contactUs'} label={MENU_LINKS.CONTACT_US} />
            </S.UserMenuItem>
            <S.UserMenuItem>
                <a onClick={() => setModal(true)}>{MENU_LINKS.SIGN_IN}</a>
                <Modal visible={modal} setVisible={setModal}>
                    <SignInForm handleRegistrationForm={handleRegistrationForm} />
                </Modal>
            </S.UserMenuItem>
        </S.UserMenuWrapper>
    );
};

export default UserMenu;
