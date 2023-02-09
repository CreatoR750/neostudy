import { FC, ReactNode } from "react";
import "./accordionWrapper.scss";

interface IAccordionWrapperProps {
    children: ReactNode;
}

const AccordionWrapper: FC<IAccordionWrapperProps> = ({ children }) => {
    return <div className="accordion-wrapper">{children}</div>;
};

export default AccordionWrapper;
