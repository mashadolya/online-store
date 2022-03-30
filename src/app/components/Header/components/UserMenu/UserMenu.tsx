import React from 'react';
import * as S from 'app/components/Header/components/UserMenu/UserMenu.style';
import LinkButton from 'app/components/controls/LinkButton/LinkButton';
import MENU_LINKS from 'app/components/Header/components/UserMenu/constants/menuLinks';

const UserMenu = () => {
    return (
        <S.UserMenuWrapper>
            <S.UserMenuItem>
                <LinkButton to={'/contactUs'} label={MENU_LINKS.CONTACT_US} />
            </S.UserMenuItem>
            <S.UserMenuItem>
                <LinkButton to={'/signIn'} label={MENU_LINKS.SIGN_IN} />
            </S.UserMenuItem>
        </S.UserMenuWrapper>
    );
};

export default UserMenu;
