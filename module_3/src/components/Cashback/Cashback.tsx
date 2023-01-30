import CashbackCard from "../../ui/CashbackCard/CashbackCard";
import "./cashback.scss";

const Cashback = () => {
    return (
        <div className="cashback">
            <CashbackCard color="light" text="For food delivery, cafes and restaurants" header="5%" />
            <CashbackCard color="dark" text="In supermarkets with our subscription" header="5%" />
            <CashbackCard color="light" text="In clothing stores and children's goods" header="2%" />
            <CashbackCard color="dark" text="Other purchases and payment of services and fines" header="1%" />
            <CashbackCard color="light" text="Shopping in online stores" header="up to 3%" />
            <CashbackCard color="dark" text="Purchases from our partners" header="30%" />
        </div>
    );
};

export default Cashback;
