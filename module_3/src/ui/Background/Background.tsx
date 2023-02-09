import { FC, ReactNode } from "react";
import "./background.scss";

interface IBackgroundProps {
    children: ReactNode;
}

const Background: FC<IBackgroundProps> = ({ children }) => {
    return <div className="background">{children}</div>;
};

export default Background;
