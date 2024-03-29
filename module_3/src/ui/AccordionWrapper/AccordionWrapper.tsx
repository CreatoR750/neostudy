import { FC, ReactNode } from "react";
import "./accordionWrapper.scss";

interface IAccordionWrapperProps {
    children: ReactNode;
}

export const AccordionWrapper: FC<IAccordionWrapperProps> = ({ children }) => {
    return <div className="accordion-wrapper">{children}</div>;
};


