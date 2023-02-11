import "./hero.scss";
import card1 from "../../assets/img/card1.jpg";
import card2 from "../../assets/img/card2.jpg";
import card3 from "../../assets/img/card3.jpg";
import card4 from "../../assets/img/card4.jpg";
import {  useNavigate } from "react-router-dom";
import { Button } from "../../ui";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero__info">
                <h1 className="hero__info__title">Choose the hero you like and apply for card right now</h1>
                <Button text="Choose the card" onClick={() => navigate("loan#get-card")} />
            </div>
            <div className="hero__cards">
                <img className="hero__cards__item" src={card1} alt="Card" />
                <img className="hero__cards__item" src={card2} alt="Card" />
                <img className="hero__cards__item" src={card3} alt="Card" />
                <img className="hero__cards__item" src={card4} alt="Card" />
            </div>
        </section>
    );
};

export default Hero;
