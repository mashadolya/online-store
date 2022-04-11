import styled from 'styled-components';

export const InputWrapper = styled.div`
    ${props => props.theme.spacer};
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    box-sizing: border-box;
    color: #8d8d8d;
    font: 14px Helvetica;
    height: 40px;
    line-height: 17px;
    padding: 0 16px;
    width: 100%;
`;

export const InputContent = styled.input`
    height: 100%;
`;
