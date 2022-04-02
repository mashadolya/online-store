import React, { Dispatch, SetStateAction } from 'react';
import * as S from 'app/components/Modal/Modal.style';

const Modal = ({
    children,
    visible,
    setVisible,
}: {
    children: React.ReactNode;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
    const handleClose = () => setVisible(false);

    return (
        <S.ModalOverlay className="modal" visible={visible} onClick={handleClose}>
            <S.ModalWrapper onClick={e => e.stopPropagation()}>
                <S.ModalContent>{children}</S.ModalContent>
            </S.ModalWrapper>
        </S.ModalOverlay>
    );
};
export default Modal;
