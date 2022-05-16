import styled from 'styled-components/macro';

export const CartItemContainer = styled.div`
  display: flex;
  box-shadow: rgb(229 229 229) 0 0 0 0 inset, rgb(229 229 229) 0 0 0 0 inset,
    rgb(229 229 229) 0px -1px 0px 0px inset, rgb(229 229 229) 0px 0px 0px 0px inset;
  padding: 24px 8px;
  width: 100%;
`;

export const CartItemImageContainer = styled.div`
  padding-right: 16px;
`;

export const CartImage = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
`;

export const CartItemBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CartItemInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex: 1 0 70%;
`;

export const CartItemDescription = styled.div`
  a {
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
  }
  div {
    color: ${({ theme }) => theme.color.teal};
  }
`;

export const CartItemActionsContainer = styled.div`
  display: flex;
`;
