import styled from 'styled-components';

export const ModalOverlay = styled.div<{ visible: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow: auto;
    display: ${props => (props.visible ? 'block' : 'none')};
    opacity: 1;
    visibility: visible;
    transition: opacity 0.8s ease, visibility 0s;
    background: hsla(0, 0%, 7%, 0.36);
    backdrop-filter: blur(4px);
    border-radius: ${props => props.theme.bo.extraSmall};
`;

export const ModalWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
    padding: 25px;
    background: ${props => props.theme.color.light001};
    border-radius: 2px;
    min-width: 324px;
`;
