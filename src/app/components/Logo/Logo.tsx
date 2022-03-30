import React from 'react';
import * as S from 'app/components/Logo/Logo.styles';

// DEV_NOTE: Issue with import as ReactComponent
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pngImage = require('./../../../assets/jpeg/nt-logo.jpeg');

const Logo = () => {
    return (
        <S.LogoContainer className="ntn-logo">
            <S.Image src={pngImage} alt="NT logo" />
        </S.LogoContainer>
    );
};

export default Logo;
