import { FC, SyntheticEvent } from 'react';
import * as S from 'src/app/components/Modal/Modal.styles';
import { ModalTypes } from 'src/app/components/Modal/Modal.types';
import Portal from 'src/app/components/Portal/Portal';

const Modal: FC<ModalTypes> = ({ children, visible, doClose, id }) => {
  const stopPropagationHandler = (e: SyntheticEvent<HTMLDialogElement>) => e.stopPropagation();

  return (
    <>
      {visible && (
        <Portal id={id ?? 'modal'}>
          <S.ModalOverlay visible={visible} onClick={doClose}>
            <S.ModalWrapper onClick={stopPropagationHandler}>
              <S.ModalContent>{children}</S.ModalContent>
            </S.ModalWrapper>
          </S.ModalOverlay>
        </Portal>
      )}
    </>
  );
};
export default Modal;
