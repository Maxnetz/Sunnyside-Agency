import React from "react";
import "./Banner.scss";
import logo from "../../assets/images/logo.svg";
import DesktopBannerImage from "../../assets/images/desktop/image-header.jpg";

const Banner = () => {
    return (
        <div className="Banner">
            {/* <img src={DesktopBannerImage} alt="banner-img" /> */}

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
        </div>
    );
};

export default Banner;
