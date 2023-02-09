import "./popup.scss";
import Portal from "../Portal/Portal";
import { FC, useEffect } from "react";
import close from "../../assets/svg/close.svg";
import Button from "../Button/Button";
import ModalBackground from "../ModalBackground/ModalBackground";
import useOutsideClick from "../../hooks/useOutsideClick";

interface IPopupProps {
    title: string;
    message: string;
    onClose: () => void;
    isOpened: boolean;
}

const Popup: FC<IPopupProps> = ({ title, message, onClose, isOpened }) => {
    const popupRef = useOutsideClick(onClose);

    useEffect(() => {
        isOpened &&
            setTimeout(() => {
                onClose();
            }, 3000);
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

export default Popup;
