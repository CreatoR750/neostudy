import { FC } from "react";
import "./divider.scss";

interface IDividerProps {
    thickness?: number;
}

export const Divider: FC<IDividerProps> = ({ thickness }) => {
    return <div style={{ height: `${thickness}px` }} className="divider"/>;
};

