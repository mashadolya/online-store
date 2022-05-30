import styled from 'styled-components/macro';

export const CartSummaryContainer = styled.aside`
  padding: 25px 8px;
  > div:nth-child(1) {
    font-weight: bold;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 12px;
  padding: 16px 0 12px;
  border-top: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
`;
