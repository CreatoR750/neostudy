import { FC, ReactNode } from "react";
import "./modalBackground.scss";

interface IModalBackgroundProps {
    children:ReactNode
}
export const ModalBackground:FC<IModalBackgroundProps> = ({children}) => {
    return <div className="modal-back">{children}</div>;
};

