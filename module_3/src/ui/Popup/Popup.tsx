import "./popup.scss";
import { FC, useEffect } from "react";
import close from "../../assets/svg/close.svg";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Button, ModalBackground, Portal } from "..";

interface IPopupProps {
    title: string;
    message: string;
    onClose: () => void;
    isOpened: boolean;
}

export const Popup: FC<IPopupProps> = ({ title, message, onClose, isOpened }) => {
    const popupRef = useOutsideClick(onClose);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isOpened) {
            timer = setTimeout(() => {
                onClose();
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [isOpened]);

    if (!isOpened) return null;

    return (
        <Portal>
            <ModalBackground>
                <div className="popup" ref={popupRef}>
                    <div className="popup__header">
                        <span>{title}</span>
                        <img src={close} alt="Close" onClick={() => onClose()} />
                    </div>
                    <p className="popup__info">{message}</p>
                    <div className="popup__bottom">
                        <Button size="small" type="primary" text="Go home" onClick={() => onClose()} />
                    </div>
                </div>
            </ModalBackground>
        </Portal>
    );
};
