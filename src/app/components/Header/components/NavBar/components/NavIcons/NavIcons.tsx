import * as S from 'src/app/components/Header/components/NavBar/components/NavIcons/NavIcons.styles';
import { Icons } from 'src/app/components/Icons';
import RouterLink from 'src/app/components/controls/RouterLink';
import { RoutePaths } from 'src/app/routes/routes';
import IconButton from 'src/app/components/controls/IconButton/IconButton';

const { Cart, Profile } = Icons;

const ICON_SIZE = 32;

const NavIcons = () => {
    return (
        <S.ItemsWrapper className="icons-group-wrapper">
            <RouterLink to={RoutePaths.CART}>
                <IconButton>
                    <Cart width={ICON_SIZE} height={ICON_SIZE} className="cart" />
                </IconButton>
            </RouterLink>
            <IconButton>
                <Profile width={ICON_SIZE} height={ICON_SIZE} className="profile" />
            </IconButton>
        </S.ItemsWrapper>
    );
};

export default NavIcons;
