import "./services.scss";
import world from "../../assets/img/world.png";

const Services = () => {
    return (
        <section className="services">
            <div className="services__text">
                <h2 className="services__text__title">You can use our services anywhere in the world</h2>
                <span className="services__text__subtitle">Withdraw and transfer money online through our application</span>
            </div>
            <img className="services__image" src={world} alt="" />
        </section>
    );
};

export default Services;
