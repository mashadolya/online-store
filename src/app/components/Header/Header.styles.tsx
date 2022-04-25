import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 136px;
    width: 100%;
`;

export const HeaderBorder = styled.div`
    height: 36px;
    width: 100%;
    background-color: ${props => props.theme.color.light002};
`;

export const HeaderContent = styled.div`
    ${props => props.theme.flex.center.spaceBetween}
`;
