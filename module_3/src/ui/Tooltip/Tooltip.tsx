import { FC, useState } from "react";
import "./tooltip.scss";

interface ITooltipProps {
    children: React.ReactElement | React.ReactElement[];
    content: string;
    delay?: number;
    direction?: "top" | "right" | "left" | "bottom";
}

export const Tooltip: FC<ITooltipProps> = ({ children, delay, content, direction }) => {
    let timeout: NodeJS.Timeout;
    const [isActive, setIsActive] = useState<boolean>(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setIsActive(true);
        }, delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setIsActive(false);
    };

    return (
        <div className="tooltip__wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {isActive && <div className={`tooltip__tip ${direction || "top"}`}>{content}</div>}
        </div>
    );
};

