import "./modal.scss";
import { FC } from "react";
import close from "../../assets/svg/close.svg";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Button, ModalBackground, Portal } from "..";

interface IModalProps {
    title: string;
    message: string;
    onClose: () => void;
    onClick: () => void;
    isOpened: boolean;
}

export const Modal: FC<IModalProps> = ({ title, message, onClick, onClose, isOpened }) => {
    const modalRef = useOutsideClick(onClose);

    if (!isOpened) return null;

    return (
        <Portal>
            <ModalBackground>
                <div className="modal" ref={modalRef}>
                    <div className="modal__header">
                        <span>{title}</span>
                        <img src={close} alt="Close" onClick={() => onClose()} />
                    </div>
                    <p className="modal__info">{message}</p>
                    <div className="modal__bottom">
                        <Button size="small" type="danger" text="Deny" onClick={() => onClick()} />
                        <Button size="small" type="primary" text="Cancel" onClick={() => onClose()} />
                    </div>
                </div>
            </ModalBackground>
        </Portal>
    );
};

