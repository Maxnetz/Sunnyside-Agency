import "./GraphicDesign.scss";

import cherry from "../../assets/images/desktop/image-graphic-design.jpg";
import orange from "../../assets/images/desktop/image-photography.jpg";

const GraphicDesign = () => {
    return (
        <div className="graphic-design">
            <div className="graphic-design--right">
                <img src={cherry} alt="cherry-graphic" />
            </div>
            <div className="graphic-design--left">
                <img src={orange} alt="orange-graphic" />
            </div>
        </div>
    );
};

export default GraphicDesign;
