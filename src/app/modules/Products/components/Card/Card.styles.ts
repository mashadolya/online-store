import styled from 'styled-components/macro';
import { Image } from 'src/app/components/Image/Image.styles';

export const CardContainer = styled.a`
  padding: 10px;
  min-width: 200px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.teal};
    cursor: pointer;
  }
`;

export const CardImage = styled(Image)`
  background-color: ${({ theme }) => theme.color.light001};

  @media (${props => props.theme.device.mobileL}) {
    width: 200px;
    height: 200px;
  }
  @media (${props => props.theme.device.laptop}) {
    width: 300px;
    height: 300px;
  }
`;

export const CardBody = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  .product-description > p {
    color: ${({ theme }) => theme.color.teal};
    line-height: ${({ theme }) => theme.sz.s6};
  }
`;

export const BodyHeader = styled.h4`
  margin: 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ProductGridCard = styled.li`
  padding: 8px;
  @media (${props => props.theme.device.mobileS}) {
    flex: none;
  }
  @media (${props => props.theme.device.laptop}) {
    flex: 1;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
