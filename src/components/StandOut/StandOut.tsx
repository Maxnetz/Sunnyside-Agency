import "./StandOut.scss";

// Assets
import desktopStandOutImage from "../../assets/images/desktop/image-stand-out.jpg";

const StandOut = () => {
    return (
        <div className="standout">
            <div className="standout__left--image">
                <img src={desktopStandOutImage} alt="red-glass" />
            </div>

            <div className="standout__right--text">
                <div className="standout__text--container">
                    <h1>Stand out to the right audience</h1>
                    <p>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we’ll
                        build and extend your brand in digital places.
                    </p>
                    <a href="#" aria-label="Link to learn more">
                        LEARN MORE
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StandOut;
