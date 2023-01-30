import "./support.scss";
import emailcon from "../../assets/svg/email.svg";
import send from "../../assets/svg/send.svg";
import { DataService } from "../../services/data.service";
import { useEffect, useState } from "react";
import Tooltip from "../../ui/Tooltip/Tooltip";

const Support = () => {
    const [email, setEmail] = useState<string>("");
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

    useEffect(() => {
        const subscribed = JSON.parse(localStorage.getItem("subscribed")!);
        subscribed && setIsSubscribed(subscribed);
    }, []);

    const handlerSubscribe = async () => {
        if (email == "") return;
        const response = await DataService.subscribeOnNews(email);
        if (response.status === 200) {
            localStorage.setItem("subscribed", JSON.stringify(true));
            setIsSubscribed(true);
        }
    };

    return (
        <section className="support">
            <div className="support__text">
                <span className="support__text__header">Support</span>
                <span className="support__text__subscribe">Subscribe Newsletter & get</span>
                <span className="support__text__news">Bank News</span>
            </div>

            <div className="support__input">
                {isSubscribed ? (
                    <Tooltip content="subscribed ">
                        <div className="support__input__sub">You are already subscribed to the bank's newsletter</div>
                    </Tooltip>
                ) : (
                    <>
                        <input className="input" placeholder="Your email" type="email" onChange={(e) => setEmail(e.target.value)} />
                        <img className="input__icon" src={emailcon} alt="Email" />
                        <button className="input__button" onClick={() => handlerSubscribe()}>
                            <img src={send} alt="Send" />
                            <span>Subscribe</span>
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};

export default Support;
