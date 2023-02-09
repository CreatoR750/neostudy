import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../../ui/Button/Button";
import "./header.scss";

const Header = () => {
    const navigate = useNavigate();
    const size = useWindowSize();
    const menuRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLDivElement>(null);

    const burgerHandler = () => {
        if (menuRef.current && burgerRef.current) {
            burgerRef.current.classList.toggle("active");
            menuRef.current.classList.toggle("active");
        }
    };

    return (
        <header className="container">
            <div className="header">
                <span className="header__logo" onClick={() => navigate("/")}>
                    NeoBank
                </span>
                {size.width! > 920 ? (
                    <>
                        <nav className="header__nav">
                            <NavLink to="/loan">Credit card</NavLink>
                            <NavLink to="/1">Product</NavLink>
                            <NavLink to="/2">Account</NavLink>
                            <NavLink to="/3">Resources</NavLink>
                        </nav>
                        <Button text={"Online Bank"} />
                    </>
                ) : (
                    <>
                        <div
                            ref={burgerRef}
                            className="header__burger"
                            onClick={() => {
                                burgerHandler();
                            }}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="header__menu" ref={menuRef}>
                            <nav className="header__menu__nav" onClick={() => burgerHandler()}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/loan">Credit card</NavLink>
                                <NavLink to="/1">Product</NavLink>
                                <NavLink to="/2">Account</NavLink>
                                <NavLink to="/3">Resources</NavLink>
                            </nav>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
