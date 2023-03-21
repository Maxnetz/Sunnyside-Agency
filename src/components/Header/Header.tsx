import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import ArrowDown from "../../assets/images/icons/icon-arrow-down.svg";
import DesktopBannerImage from "../../assets/images/desktop/image-header.jpg";

const Header = () => {
    return (
        <div className="Header">
            <img src={DesktopBannerImage} alt="banner-img" />
            <div className="Nav">
                <div className="logo__container">
                    <img src={logo} alt="logo" />
                </div>

                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <button>CONTACT</button>
                    </li>
                </ul>
            </div>

            <div className="Hero__Container">
                <h1>WE ARE CREATIVES</h1>
                <img
                    src={ArrowDown}
                    alt="ArrowDown"
                />
            </div>
        </div>
    );
};

export default Header;
