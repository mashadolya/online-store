import styled from 'styled-components/macro';

export const CardListContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (${props => props.theme.device.laptop}) {
        flex-wrap: nowrap;
    }
`;
