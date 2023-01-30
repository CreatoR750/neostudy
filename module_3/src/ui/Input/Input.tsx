import { FC } from "react";
import "./input.scss";
import { Path, UseFormRegister } from "react-hook-form";
import errorIcon from "../../assets/svg/error.svg";
import successIcon from "../../assets/svg/success.svg";
import { ILoanValues } from "../../models/loan";

interface IInputProps {
    type: "text" | "email" | "number" | "date";
    placeholder?: string;
    label?: string;
    required?: boolean;
    name: Path<ILoanValues>;
    register: UseFormRegister<ILoanValues>;
    validation?: Record<string, any>;
    errors?: any;
    isDirty?: boolean;
}

const Input: FC<IInputProps> = ({ type, label, required, placeholder, name, register, validation, errors, isDirty }) => {
    return (
        <div className="input__wrapper">
            <label className="input__label">
                {label}
                {required && <span> *</span>}
            </label>
            <input className={`input__input ${errors ? "not-valid" : ""}`} placeholder={placeholder} type={type} {...register(name, validation)} />
            {errors && <img className="input__icon" src={errorIcon} alt="icon" />}
            {!errors && isDirty! && <img className="input__icon" src={successIcon} alt="icon" />}
            {errors ? <span className="input__error">{errors.message}</span> : null}
        </div>
    );
};

export default Input;
