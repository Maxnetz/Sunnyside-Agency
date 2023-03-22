import "./Transform.scss";
import DesktopTransformImage from "../../assets/images/desktop/image-transform.jpg";
import MobileTransformImage from "../../assets/images/mobile/image-transform.jpg";

const Transform = () => {
    const link = "";

    return (
        <>
            <div className="transform-text">
                <div>
                    <h2>Transform your brand</h2>
                    <p>
                        We are a full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for
                        you.
                    </p>
                    <a href={link} aria-label="Link to learn more">
                        LEARN MORE
                    </a>
                </div>
            </div>
            <div className="transform-image">
                <img src={DesktopTransformImage} alt="" />
            </div>
        </>
    );
};

export default Transform;
