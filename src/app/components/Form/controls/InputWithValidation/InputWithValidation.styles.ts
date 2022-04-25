import styled from 'styled-components';
import Input from 'src/app/components/controls/Input/Input';

export const InputWithError = styled(Input)<{ hasError: boolean }>`
    border-color: ${p => (p.hasError ? p.theme.color.red : p.theme.color.teal)};
`;

export const ErrorContainer = styled.p`
    margin: 5px 0;
    padding-left: 10px;
    color: ${({ theme }) => theme.color.red};
    font-size: ${({ theme }) => theme.sz.s3};
`;
