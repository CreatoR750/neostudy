import "./cardInfo.scss";
import Tooltip from "../../ui/Tooltip/Tooltip";
import card5 from "../../assets/img/card5.png";

const CardInfo = () => {
    return (
        <div className="card-info">
            <div className="card-info__left">
                <h2>Platinum digital credit card</h2>
                <span className="card-info__left__sub">
                    Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and transfers without commission and interest.
                </span>
                <div className="card-info__left__terms">
                    <div className="term">
                        <Tooltip content="When repaying the full debt up to 160 days." direction="top">
                            <span className="term__title">Up to 160 days</span>
                        </Tooltip>
                        <span className="term__sub">No percent</span>
                    </div>

                    <div className="term">
                        <Tooltip content="Over the limit willaccrue percent" direction="top">
                            <span className="term__title">Up to 600 000 ₽</span>
                        </Tooltip>

                        <span className="term__sub">Credit limit</span>
                    </div>
                    <div className="term">
                        <Tooltip content="Promotion valid until December 31, 2022." direction="top">
                            <span className="term__title">0 ₽</span>
                        </Tooltip>

                        <span className="term__sub">Card service is free</span>
                    </div>
                </div>
                <a href="#get-card" style={{ textDecoration: "none" }} className="button">
                    Apply for card
                </a>
            </div>
            <div className="card-info__right">
                <img src={card5} alt="Card" />
            </div>
        </div>
    );
};

export default CardInfo;
