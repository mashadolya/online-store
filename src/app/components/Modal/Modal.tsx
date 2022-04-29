import { FC, SyntheticEvent } from 'react';
import * as S from 'src/app/components/Modal/Modal.styles';
import { ModalTypes } from 'src/app/components/Modal/Modal.types';

const Modal: FC<ModalTypes> = ({ children, visible, doClose }) => {
    const stopPropagationHandler = (e: SyntheticEvent<HTMLDialogElement>) => e.stopPropagation();

    return (
        <S.ModalOverlay visible={visible} onClick={doClose}>
            <S.ModalWrapper onClick={stopPropagationHandler}>
                <S.ModalContent>{children}</S.ModalContent>
            </S.ModalWrapper>
        </S.ModalOverlay>
    );
};
export default Modal;
