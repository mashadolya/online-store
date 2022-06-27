import styled from 'styled-components/macro';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 38px;
  background-color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.bo.small};
  color: ${({ theme }) => theme.color.light001};
  font-size: ${({ theme }) => theme.sz.s4};

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: inherit;
  color: inherit;

  &:hover {
    cursor: pointer;
  }
`;
