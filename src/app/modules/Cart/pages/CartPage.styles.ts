import styled from 'styled-components/macro';

export const CartViewContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1100px;
  margin: 0 auto 40px;
  padding-top: 40px;
  flex-wrap: wrap;
`;
export const CartItemsContainer = styled.div`
  flex: 1 1 auto;
  padding: 0 6px;
`;
export const CartSummaryContainer = styled.div`
  flex: 0 0 30%;
  padding: 30px 6px;
  min-width: 327px;
  @media (min-width: 687px) {
    padding: 0 6px;
  }
`;
