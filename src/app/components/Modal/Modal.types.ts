import React from 'react';

export interface ModalTypes {
    children: React.ReactNode;
    visible: boolean;
    doClose: () => void;
}
