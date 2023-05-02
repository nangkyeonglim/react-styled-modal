import React, { PropsWithChildren } from 'react';
type ModalProps = {
    open: boolean;
    onCloseModal: () => void;
};
export declare const Modal: ({ open, children, onCloseModal, }: PropsWithChildren<ModalProps>) => React.ReactPortal;
export {};
