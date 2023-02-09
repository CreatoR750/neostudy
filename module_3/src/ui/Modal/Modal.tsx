import "./modal.scss";
import Portal from "../Portal/Portal";
import { FC } from "react";
import close from "../../assets/svg/close.svg";
import Button from "../Button/Button";
import ModalBackground from "../ModalBackground/ModalBackground";
import useOutsideClick from "../../hooks/useOutsideClick";

interface IModalProps {
    title: string;
    message: string;
    onClose: () => void;
    onClick: () => void;
    isOpened: boolean;
}

const Modal: FC<IModalProps> = ({ title, message, onClick, onClose, isOpened }) => {
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

export default Modal;
