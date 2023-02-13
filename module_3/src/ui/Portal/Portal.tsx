import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
    children: ReactNode;
}

export const Portal: FC<IPortalProps> = ({ children }) => {
    const container = document.createElement("div");

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        };
    }, []);
    return createPortal(children, container);
};
