import styled from 'styled-components';

const isSubmit = (type?: string) => type === 'submit';

export const InputContainer = styled.div<{ type?: string }>`
    padding: 0 16px;
    height: 40px;
    width: 100%;
    background-color: ${({ type, theme: { color } }) =>
        isSubmit(type) ? color.black : color.light001};
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    box-sizing: border-box;
    line-height: 17px;
    text-align: ${({ type }) => (isSubmit(type) ? 'center' : 'unset')};
    // DEV_NOTE: https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
    }
`;

export const InputContent = styled.input<{ type?: string }>`
    width: 100%;
    height: 100%;
    color: ${({ type, theme: { color } }) => (isSubmit(type) ? color.light003 : color.black)};
`;
