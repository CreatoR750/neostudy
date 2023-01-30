import { FC } from "react";
import "./accordionWrapper.scss";

interface IAccordionWrapperProps {
    children: React.ReactElement | React.ReactElement[];
}

const AccordionWrapper: FC<IAccordionWrapperProps> = ({ children }) => {
    return <div className="accordion-wrapper">{children}</div>;
};

export default AccordionWrapper;
