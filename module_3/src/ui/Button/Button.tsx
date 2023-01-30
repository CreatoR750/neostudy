import { FC } from "react";
import "./button.scss";

interface IButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ text, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
