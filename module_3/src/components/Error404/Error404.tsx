import "./error.scss";
import notFoundImage from "../../assets/img/notFoundImage.png";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();
    return (
        <section className="error-404">
            <div className="error-404__text">
                <span className="error-404__text__reg">Oops....</span>
                <span className="error-404__text__info">Page not found</span>
                <span className="error-404__text__message">This Page doesn`t exist or was removed! We suggest you go back.</span>
                <Button text="Go back" onClick={() => navigate(-1)} />
            </div>
            <img className="error-404__image" src={notFoundImage} alt="Not found" />
        </section>
    );
};

export default Error404;
