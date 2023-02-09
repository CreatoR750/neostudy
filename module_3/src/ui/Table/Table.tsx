import { FC, useEffect, useMemo, useState } from "react";
import { IPayment } from "../../models/paymentModel";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import "./table.scss";
import { baseSort, dateSort } from "./utils";

interface ITableProps {
    data: IPayment[];
    columns: string[];
}

interface ISort {
    id: string;
    type: "asc" | "dsc";
}

interface IHeader {
    id: string;
    name: string;
}

const Table: FC<ITableProps> = ({ data, columns }) => {
    const [values, setValues] = useState<IPayment[]>(data);
    const [sort, setSort] = useState<ISort>({ id: "", type: "asc" });
    const [header, setHeader] = useState<IHeader[]>([]);

    useMemo(() => {
        setHeader(
            Object.keys(data[0]).map((value, index) => {
                return { id: value, name: columns[index] };
            })
        );
    }, [data]);

    useEffect(() => {
        setSort({ id: header[0].id, type: "asc" });
    }, []);

    useEffect(() => {
        if (sort.id === "") return;
        handlerSorting(sort);
    }, [sort]);

    const handlerSorting = (sortField: ISort) => {
        const newValues = [...values];
        if (sortField.id === "date") {
            setValues(dateSort(newValues, sortField.id, sortField.type));
        } else setValues(baseSort(newValues, sortField.id, sortField.type));
    };

    const sortHandler = (head: IHeader) => {
        setSort((prev) => {
            let value: any;
            if (prev.id === head.id && prev.type === "asc") {
                value = { id: prev.id, type: "dsc" };
            } else if (prev.id === head.id && prev.type === "dsc") {
                value = { id: prev.id, type: "asc" };
            } else if (prev.id !== head.id && prev.type === "dsc") {
                value = { id: head.id, type: "asc" };
            } else if (prev.id !== head.id && prev.type === "asc") {
                value = { id: head.id, type: "dsc" };
            }
            return value;
        });
    };
    return (
        <div className="table">
            <div className="table__row">
                {header.map((header) => (
                    <div
                        key={header.id}
                        style={{ width: `calc(98% / ${columns.length})` }}
                        className="cell head"
                        onClick={() => {
                            sortHandler(header);
                        }}
                    >
                        {header.name}
                        <Arrow className={sort.id === header.id && sort.type === "dsc" ? "" : "table__row icon"} />
                    </div>
                ))}
            </div>
            {values.map((value, index) => (
                <div key={index} className="table__row">
                    {Object.values(value).map((item, index) => (
                        <div key={`${item}_${index}`} style={{ width: `calc(98% / ${columns.length})` }} className="cell">
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Table;
