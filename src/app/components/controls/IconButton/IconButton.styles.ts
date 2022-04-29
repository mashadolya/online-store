import styled from 'styled-components/macro';

export const IconButtonWrapper = styled.button`
    position: relative;
    width: 32px;
    height: 32px;
    border: none;
    z-index: 1;
    cursor: pointer;
    background: none;
    &:hover {
        color: ${({ theme }) => theme.color.teal};
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 50%;
        z-index: -1;
        background-color: black;
        transition: 0.2s ease;
        transform: scale(0.6);
        opacity: 0;
    }
`;

export const Icon = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:hover {
        fill: ${({ theme }) => theme.color.teal};
    }
`;
