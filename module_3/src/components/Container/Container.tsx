import React, { FC } from "react";

interface IContainerProps {
    children: React.ReactElement | React.ReactElement[];
}

const Container: FC<IContainerProps> = ({ children }) => {
    return <main className="container">{children}</main>;
};

export default Container;
