import "./features.scss";
import people from "../../assets/img/people.png";
import check from "../../assets/svg/check.svg";

const Features = () => {
    return (
        <section className="features">
            <img className="features__image" src={people} alt="" />
            <div className="features__info">
                <h2 className="features__info__title">We Provide Many Features You Can Use</h2>
                <span className="features__info__subtitle">
                    You can explore the features that we provide with fun and have their own functions each feature
                </span>
                <div className="features__info__list">
                    <div className="feature">
                        <img src={check} alt="check" />
                        <span>Powerfull online protection.</span>
                    </div>
                    <div className="feature">
                        <img src={check} alt="check" />
                        <span>Cashback without borders.</span>
                    </div>
                    <div className="feature">
                        <img src={check} alt="check" />
                        <span>Personal design</span>
                    </div>
                    <div className="feature">
                        <img src={check} alt="check" />
                        <span>Work anywhere in the world</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
