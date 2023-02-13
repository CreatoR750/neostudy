import { FC, useState } from "react";
import "./checkbox.scss";

interface ICheckboxProps {
    label: string;
    checked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    props?: any;
}

export const Checkbox: FC<ICheckboxProps> = ({ label, checked, setIsChecked, ...props }) => {
    return (
        <div className="checkbox-wrapper">
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    className={checked ? "checked" : ""}
                    {...props}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};
