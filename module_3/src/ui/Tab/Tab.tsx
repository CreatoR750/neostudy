import { FC } from "react";
import "./tab.scss";
export interface ITabProps {
    children: React.ReactElement | React.ReactElement[];
    name: string;
}
const Tab: FC<ITabProps> = ({ children }) => {
    return <>{children}</>;
};

export default Tab;
