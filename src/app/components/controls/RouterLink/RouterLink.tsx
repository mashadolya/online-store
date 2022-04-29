import React, { FC } from 'react';
import * as S from 'src/app/components/controls/RouterLink/RouterLink.styles';
import { RouterLinkTypes } from 'src/app/components/controls/RouterLink/RouterLink.types';

const RouterLink: FC<RouterLinkTypes> = ({ to, children }) => {
    return <S.LinkStyles to={to}>{children}</S.LinkStyles>;
};

export default RouterLink;
