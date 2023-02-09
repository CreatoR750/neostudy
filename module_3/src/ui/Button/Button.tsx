import { FC } from "react";
import "./button.scss";

interface IButtonProps {
    size?: "small" | "medium";
    type?: "primary" | "danger";
    text: string;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ size, text, onClick, type, disabled }) => {
    return (
        <button className={`button ${type} ${size} ${disabled ? "disabled" : ""}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
