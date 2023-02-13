import { FC, ReactNode } from "react";
import "./tab.scss";

export interface ITabProps {
    children: ReactNode;
    name: string;
}

export const Tab: FC<ITabProps> = ({ children }) => {
    return <>{children}</>;
};


