import styled from 'styled-components';

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 40px;
    color: ${props => props.theme.color.red};
`;
