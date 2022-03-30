import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: auto 0;
    padding: 0 10px;
    max-width: 656px;
    width: 656px;
    height: 40px;
    border-radius: 20px;
    background-color: ${props => props.theme.color.light002};
`;

export const InputWrapped = styled.input`
    width: 100%;
`;
