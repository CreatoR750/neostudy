import "./exchange.scss";
import house from "../../assets/img/house.png";
import { DataService } from "../../services/data.service";
import { useEffect, useState } from "react";
const currency = ["USD", "EUR", "CNH", "IDR", "TWD", "THB"];

interface ICurrency {
    currency: string;
    value: string;
}

const Exchange = () => {
    const [data, setData] = useState<ICurrency[]>([]);

    useEffect(() => {
        debounce(exchangeCurrency, 15000);
    }, []);

    const exchangeCurrency = async (currencyArr: string[]) => {
        const acc: ICurrency[] = [];
        await Promise.all(
            currencyArr.map(async (curr: string) => {
                try {
                    const value = await DataService.getCurrency(curr);
                    acc.push({ currency: curr, value: value });
                } catch (error) {
                    console.log(error);
                }
            })
        );
        setData(acc);
    };

    function debounce(callback: any, delay: number) {
        callback(currency).then(() => {
            setTimeout(() => {
                debounce(callback, delay);
            }, delay);
        });
    }

    return (
        <section className="exchange">
            <div className="exchange__left">
                <h2 className="exchange__left__title">Exchange rate in internet bank</h2>
                <span className="exchange__left__subtitle">Currency</span>
                <div className="exchange__left__courses" id="exchange">
                    {data &&
                        data.map((item, index) => {
                            return (
                                <div className="course" key={`${item.value}${index}`}>
                                    <span className="course__item">{item.currency}:</span>
                                    <span className="course__value">{item.value}</span>
                                </div>
                            );
                        })}
                </div>
                <span className="exchange__left__info">All courses</span>
            </div>
            <div className="exchange__right">
                <span className="exchange__right__update">Update every 15 minutes, MSC 09.08.2022</span>
                <img className="exchange__right__image" src={house} alt="House" />
            </div>
        </section>
    );
};

export default Exchange;
