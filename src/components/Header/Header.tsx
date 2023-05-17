import "./Header.scss";

// assests
import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />

            <div className="header__menu">
                <span>About</span>
                <span>Services</span>
                <span>Projects</span>
                <div className="menu__button--contact">Contact</div>
            </div>
        </div>
    );
};

export default Header;
