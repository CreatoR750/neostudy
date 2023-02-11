import { FC } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IPrescoringValues } from "../../models/prescoringModel";
import { IScoringValues } from "../../models/scoringModel";
import "./select.scss";

interface ISelectProps {
    type?: "date" | "any";
    size?: "small" | "medium" | "large";
    label?: string;
    required?: boolean;
    name: Path<IPrescoringValues | IScoringValues>;
    register: UseFormRegister<IPrescoringValues | IScoringValues | any>;
    validation?: Record<string, any>;
    options: number[] | string[];
}

export const Select: FC<ISelectProps> = ({ size = "small", label, required, name, register, validation, options, type = "any" }) => {
    return (
        <div className={`select__wrapper ${size}`}>
            {label && (
                <label className="select__label">
                    {label}
                    {required && <span> *</span>}
                </label>
            )}
            <select className={`select__select`} {...register(name, validation)}>
                {options.map((option) => {
                    return (
                        <option key={option} value={option}>
                            {`${option}`}
                            {type === "date" && " month"}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};


