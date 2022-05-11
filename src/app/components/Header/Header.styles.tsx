import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
  height: 136px;
  width: 100%;
`;

export const HeaderBorder = styled.div`
  @media (${props => props.theme.device.laptop}) {
    height: 36px;
    width: 100%;
    background-color: ${props => props.theme.color.light002};
  }
`;

export const HeaderContent = styled.div`
  ${props => props.theme.flex.center.spaceBetween}
`;

export const HeaderItemContainer = styled.div`
  display: flex;
  margin: 0 10px;
`;

export const HeaderIconsContainer = styled(HeaderItemContainer)`
  flex: 1 0 70%;
  justify-content: flex-end;
`;
