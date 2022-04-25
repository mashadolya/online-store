import styled from 'styled-components';

export const FormHeaderContainer = styled.header`
    text-align: center;
`;

export const FormHeaderTitle = styled.div`
    margin: 0 auto;
    padding: 32px 0 26px;
    max-width: 25ch;
    font-size: 26px;
    line-height: 26px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const FormHeaderBody = styled.div`
    padding-bottom: 27px;
    line-height: 22px;
    font-weight: ${({ theme }) => theme.ty.regular};
    text-transform: none !important;
`;
