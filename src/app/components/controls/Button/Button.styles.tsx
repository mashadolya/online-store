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
    cursor: pointer;
    font-size: ${({ theme }) => theme.sz.s4};
`;

export const Button = styled.button`
    width: 100%;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
`;
