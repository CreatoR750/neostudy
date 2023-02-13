import "./accordion.scss";
import expand from "../../assets/svg/expand.svg";
import { FC, useState } from "react";

interface IAccordionProps {
    title: string;
    info: string;
}

export const Accordion: FC<IAccordionProps> = ({ title, info }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="accordion" onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <div className="accordion__title">
                <span>{title}</span>
                <img className={isOpen ? "opened" : ""} src={expand} alt="icon" />
            </div>
            {isOpen && <div className="accordion__info">{info}</div>}
        </div>
    );
};
