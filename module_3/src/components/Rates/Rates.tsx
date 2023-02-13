import { Divider } from "../../ui";
import "./rates.scss";

const Rates = () => {
    return (
        <div className="rates">
            <div className="rates__row">
                <div className="rates__row__item">Card currency</div>
                <div className="rates__row__value">Rubles, dollars, euro</div>
            </div>
            <Divider />
            <div className="rates__row">
                <div className="rates__row__item">Interest free period</div>
                <div className="rates__row__value">0% up to 160 days</div>
            </div>
            <Divider />
            <div className="rates__row">
                <div className="rates__row__item">Payment system</div>
                <div className="rates__row__value">Mastercard, Visa</div>
            </div>
            <Divider />
            <div className="rates__row">
                <div className="rates__row__item">Maximum credit limit on the card</div>
                <div className="rates__row__value">600 000 ₽</div>
            </div>
            <Divider />
            <div className="rates__row">
                <div className="rates__row__item">Replenishment and withdrawal</div>
                <div className="rates__row__value">At any ATM. Top up your credit card for free with cash or transfer from other cards</div>
            </div>
            <Divider />
            <div className="rates__row">
                <div className="rates__row__item">Max cashback per month</div>
                <div className="rates__row__value">15 000 ₽</div>
            </div>
            <Divider />
            <div className="rates__row">
                <div className="rates__row__item">Transaction Alert</div>
                <div className="rates__row__value">0 ₽ — card statement, information about transactions in the online bank</div>
            </div>
        </div>
    );
};

export default Rates;
