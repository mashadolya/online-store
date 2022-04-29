import React, { FC } from 'react';
import logoPath from 'src/assets/jpeg/nt-logo.jpeg';
import { RoutePaths } from 'src/app/routes/routes';
import RouterLink from 'src/app/components/controls/RouterLink';
import * as S from 'src/app/components/Logo/Logo.styles';

const Logo: FC = () => {
    return (
        <RouterLink to={RoutePaths.HOME}>
            <S.LogoContainer>
                <S.Image src={logoPath} alt="No toxic logo" />
            </S.LogoContainer>
        </RouterLink>
    );
};

export default Logo;
