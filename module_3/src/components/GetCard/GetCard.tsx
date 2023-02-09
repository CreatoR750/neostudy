import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Divider from "../../ui/Divider/Divider";
import CardStatus from "../CardStatus/CardStatus";
import "./getCard.scss";

const GetCard = () => {
    const navigateRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                navigateRef.current?.scrollIntoView();
            }, 100);
        }
    }, []);

    return (
        <div className="get-card" id="get-card" ref={navigateRef}>
            <h2 className="get-card__title">How to get a card</h2>
            <div className="get-card__steps">
                <div className="step">
                    <div className="step__header">
                        <div className="step__header__number">1</div>
                        <Divider />
                    </div>
                    <div className="step__bottom">
                        <span>Fill out an online application - you do not need to visit the bank</span>
                    </div>
                </div>
                <div className="step">
                    <div className="step__header">
                        <div className="step__header__number">2</div>
                        <Divider />
                    </div>
                    <div className="step__bottom">
                        <span>Find out the bank's decision immediately after filling out the application</span>
                    </div>
                </div>
                <div className="step">
                    <div className="step__header">
                        <div className="step__header__number">3</div>
                        <Divider />
                    </div>
                    <div className="step__bottom">
                        <span>The bank will deliver the card free of charge, wherever convenient, to your city</span>
                    </div>
                </div>
            </div>
            <CardStatus />
        </div>
    );
};

export default GetCard;
