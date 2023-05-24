import "./Transform.scss";

// assets
import egg from "../../assets/images/desktop/image-transform.jpg";

const Transform = () => {
    return (
        <div className="transform">
            <div className="transform__left--text">
                <div className="transform__text--container">
                    <h1>Transform your brand</h1>
                    <p>
                        We are a full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for
                        you.
                    </p>
                    <a href="#" aria-label="Link to learn more">
                        LEARN MORE
                    </a>
                </div>
            </div>
            <div className="transform__right--image">
                <img src={egg} alt="transform__egg" />
            </div>
        </div>
    );
};

export default Transform;
