import styled from 'styled-components';

export const HeaderContainerStyled = styled.div`
    height: 136px;
    width: 100%;
`;

export const HeaderBorder = styled.div`
    height: 36px;
    width: 100%;
    background-color: ${props => props.theme.color.light002};
`;

export const HeaderStyles = styled.header`
    ${props => props.theme.flex.center.spaceBetween}
`;
