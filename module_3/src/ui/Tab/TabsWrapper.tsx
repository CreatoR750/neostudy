import { Children, FC, isValidElement, ReactElement } from "react";
import { useEffect, useState } from "react";
import { ITabProps } from "./Tab";
import "./tab.scss";

interface ITabWrapperProps {
    children: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
}

interface ITabsValues {
    tabHeader: string[] | null;
    childContent: Record<string, ReactElement<ITabProps>> | null;
    active: string | null;
}

export const TabsWrapper: FC<ITabWrapperProps> = ({ children }) => {
    const [tabValues, setTabValues] = useState<ITabsValues>({ tabHeader: null, childContent: null, active: null });

    useEffect(() => {
        const headers: string[] = [];
        const childCnt: Record<string, any> = {};
        Children.forEach(children, (element) => {
            if (!isValidElement(element)) return;
            const { name } = element.props;
            headers.push(name);
            childCnt[name] = element.props.children;
        });
        setTabValues({ tabHeader: headers, active: headers[0], childContent: { ...childCnt } });
    }, [children]);

    const childCnt = tabValues.childContent;

    return (
        <div className="tab">
            <div className="tab__header">
                {tabValues.tabHeader?.map((item) => (
                    <div
                        onClick={() => setTabValues((prev) => ({ ...prev, active: item }))}
                        key={item}
                        className={item === tabValues.active ? "active" : ""}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="tab__content">
                {childCnt &&
                    Object.keys(childCnt).map((key) => {
                        if (key === tabValues.active) {
                            return <div key={key}>{(childCnt)[key]}</div>;
                        } else {
                            return null;
                        }
                    })}
            </div>
        </div>
    );
};

