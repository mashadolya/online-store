import * as S from 'src/app/components/Header/components/NavBar/components/NavIcons/NavIcons.styles';
import { Icons } from 'src/app/components/Icons';
import RouterLink from 'src/app/components/controls/RouterLink';
import { RoutePaths } from 'src/app/routes/routes';

const { Cart } = Icons;

const ICON_SIZE = 32;

const NavIcons = () => {
    return (
        <S.ItemsWrapper className="icons-group-wrapper">
            <RouterLink to={RoutePaths.CART}>
                <Cart width={ICON_SIZE} height={ICON_SIZE} className="cart" />
            </RouterLink>
        </S.ItemsWrapper>
    );
};

export default NavIcons;
