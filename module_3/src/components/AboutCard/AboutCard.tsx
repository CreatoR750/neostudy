import useWindowSize from "../../hooks/useWindowSize";
import CardTab from "../../ui/CardTab/CardTab";
import "./aboutCard.scss";

const AboutCard = () => {
    const size = useWindowSize();

    return (
        <div className="about-card">
            <CardTab
                text="Cash and transfers without commission and percent"
                header="Up to 50 000 ₽"
                color="light"
                size={size.width! < 920 ? "big" : "small"}
                icon="money"
            />
            <CardTab
                text="Without percent on the loan"
                header="Up to 160 days"
                color="dark"
                size={size.width! < 920 ? "big" : "small"}
                icon="calendar"
            />
            <CardTab
                text="We will deliver your card by courier at a convenient place and time for you"
                header="Free delivery"
                color="light"
                size={size.width! < 920 ? "big" : "small"}
                icon="clock"
            />
            <CardTab
                text="No percent. For equipment, clothes and other purchases in installments"
                header="Up to 12 months"
                color="dark"
                size="big"
                icon="bag"
            />
            <CardTab
                text="At any ATM. Top up your credit card for free with cash or transfer from other cards"
                header="Convenient deposit and withdrawal"
                color="light"
                size="big"
                icon="credit"
            />
        </div>
    );
};

export default AboutCard;
