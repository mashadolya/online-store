import React, { FC } from 'react';
import { ActionLinkTypes } from 'src/app/components/controls/ActionLink/ActionLink.types';
import * as S from 'src/app/components/controls/ActionLink/ActionLink.styles';
import { Link } from 'src/app/components/controls/ActionLink/ActionLink.styles';

const ActionLink: FC<ActionLinkTypes> = ({ description, linkText, onClick }) => {
  return (
    <S.ActionLinkContainer>
      {description}
      <Link onClick={onClick} type="button">
        {linkText}
      </Link>
    </S.ActionLinkContainer>
  );
};

export default ActionLink;
