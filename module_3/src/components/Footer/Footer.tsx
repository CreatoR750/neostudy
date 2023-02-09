import "./footer.scss";
import logo from "../../assets/img/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__wrapper__header">
                        <img src={logo} alt="Logo" />
                        <div className="contacts">
                            <a className="contacts__number">+7 (495) 984 25 13</a>
                            <a className="contacts__email">info@neoflex.ru</a>
                        </div>
                    </div>
                    <div className="footer__wrapper__links">
                        <a className="link">About bank</a>
                        <a className="link">Ask a Question</a>
                        <a className="link">Quality of service </a>
                        <a className="link">Requisites</a>
                        <a className="link">Press center</a>
                        <a className="link">Bank career</a>
                        <a className="link">Investors</a>
                        <a className="link">Analytics</a>
                        <a className="link">Business and processes</a>
                        <a className="link">Compliance and business ethics</a>
                    </div>
                    <div className="footer__wrapper__cookies">
                        <span>
                            We use cookies to personalize our services and improve the user experience of our website. Cookies are small files
                            containing information about previous visits to a website. If you do not want to use cookies, please change your browser
                            settings
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
