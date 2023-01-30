import React, { FC } from "react";
import { useEffect, useState } from "react";
import { ITabProps } from "./Tab";
import "./tab.scss";

interface ITabWrapperProps {
    children: React.ReactElement<ITabProps> | Array<React.ReactElement<ITabProps>>;
}

const TabsWrapper: FC<ITabWrapperProps> = ({ children }) => {
    const [tabHeader, setTabHeader] = useState<string[]>([]);
    const [childContent, setChildContent] = useState<Record<string, React.ReactElement<ITabProps>>>({});
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const headers: string[] = [];
        const childCnt: Record<string, any> = {};
        React.Children.forEach(children, (element) => {
            if (!React.isValidElement(element)) return;
            const { name } = element.props;
            headers.push(name);
            childCnt[name] = element.props.children;
        });
        setTabHeader(headers);
        setActive(headers[0]);
        setChildContent({ ...childCnt });
    }, [children]);

    return (
        <div className="tab">
            <div className="tab__header">
                {tabHeader.map((item) => (
                    <div onClick={() => setActive(item)} key={item} className={item === active ? "active" : ""}>
                        {item}
                    </div>
                ))}
            </div>
            <div className="tab__content">
                {Object.keys(childContent).map((key) => {
                    if (key === active) {
                        return <div key={key}>{childContent[key]}</div>;
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default TabsWrapper;
