import styled from 'styled-components';

export const CenterContainer = styled.div`
    margin: 0 auto;
    padding: ${props => props.theme.sz.s1};
    max-width: ${props => props.theme.media.xxl};
    width: 100%;
`;
