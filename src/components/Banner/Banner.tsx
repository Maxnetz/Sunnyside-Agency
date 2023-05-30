import "./Banner.scss";
import Header from "../Header/Header";

// assests
import arrowDown from "../../assets/images/icons/icon-arrow-down.svg";

const Banner = () => {
    return (
        <div className="banner">
            <Header />

            <div className="main">
                <span className="main__text">WE ARE CREATIVES</span>
                <a href="#transform">
                    <img src={arrowDown} alt="arrowDown" className="arrow" />
                </a>
            </div>
        </div>
    );
};

export default Banner;
