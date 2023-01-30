import { FC } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { ILoanValues } from "../../models/loan";
import "./select.scss";

interface ISelectProps {
    label?: string;
    required?: boolean;
    name: Path<ILoanValues>;
    register: UseFormRegister<ILoanValues>;
    validation?: Record<string, any>;
    options: number[];
}

const Select: FC<ISelectProps> = ({ label, required, name, register, validation, options }) => {
    return (
        <div className="select__wrapper">
            {label && (
                <label className="select__label">
                    {label}
                    {required && <span> *</span>}
                </label>
            )}
            <select className={`select__select`} {...register(name, validation)}>
                {options.map((option) => {
                    return <option key={option} value={option}>{`${option} month`}</option>;
                })}
            </select>
        </div>
    );
};

export default Select;
