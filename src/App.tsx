import "./styles/App.scss";

// Components
import Banner from "./components/Banner/Banner";
import Transform from "./components/Transform/Transform";
import StandOut from "./components/StandOut/StandOut";
import GraphicDesign from "./components/GraphicDesign/GraphicDesign";

function App() {
    return (
        <div className="App">
            <Banner />
            <Transform />
            <StandOut />
            <GraphicDesign />
        </div>
    );
}

export default App;
