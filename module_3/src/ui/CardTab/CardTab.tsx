import { FC } from "react";
import "./cardTab.scss";
import money from "../../assets/svg/money.svg";
import calendar from "../../assets/svg/calendar.svg";
import clock from "../../assets/svg/clock.svg";
import bag from "../../assets/svg/bag.svg";
import credit from "../../assets/svg/credit.svg";

interface IInfoCardProps {
    color: "light" | "dark";
    size: "small" | "big" | "large";
    icon: "money" | "calendar" | "clock" | "bag" | "credit";
    header: string;
    text: string;
}

export const CardTab: FC<IInfoCardProps> = ({ color, size, icon, header, text }) => {
    const imageHandler = () => {
        switch (icon) {
            case "money":
                return <img src={money} className="card-tab__icon" alt="icon" />;
            case "calendar":
                return <img src={calendar} className="card-tab__icon" alt="icon" />;
            case "clock":
                return <img src={clock} className="card-tab__icon" alt="icon" />;
            case "bag":
                return <img src={bag} className="card-tab__icon" alt="icon" />;
            case "credit":
                return <img src={credit} className="card-tab__icon" alt="icon" />;
        }
    };

    return (
        <div className={`card-tab ${color} ${size} `}>
            {imageHandler()}
            <h2>{header}</h2>
            <span>{text}</span>
        </div>
    );
};

