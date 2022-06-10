import styled from 'styled-components/macro';

export const ErrorCardContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`;

export const ErrorCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  height: 100px;
  text-align: center;
  border: solid 1px black;
  background-color: ${({ theme }) => theme.color.light002};
`;

export const ErrorLink = styled.span`
  color: ${({ theme }) => theme.color.red};
  &:hover {
    cursor: pointer;
  }
`;
