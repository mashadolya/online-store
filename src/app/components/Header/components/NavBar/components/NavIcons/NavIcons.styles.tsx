import styled from 'styled-components/macro';
import { IconButtonWrapper } from 'src/app/components/controls/IconButton/IconButton.styles';

export const ItemsWrapper = styled.div`
    ${props => props.theme.flex.center.spaceBetween}
`;

export const ItemWrapper = styled(IconButtonWrapper)`
    padding: 0 30px;
`;
