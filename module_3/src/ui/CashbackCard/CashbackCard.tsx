import { FC } from "react";
import "./cashbackCard.scss";

interface ICashbackCardProps {
    color: "light" | "dark";
    header: string;
    text: string;
}

export const CashbackCard: FC<ICashbackCardProps> = ({ color, header, text }) => {
    return (
        <div className={`cashback-card ${color}`}>
            <span>{text}</span>
            <h2>{header}</h2>
        </div>
    );
};

