import "./styles/App.scss";

// Components
import Banner from "./components/Banner/Banner";
import Transform from "./components/Transform/Transform";
import StandOut from "./components/StandOut/StandOut";

function App() {
    return (
        <div className="App">
            <Banner />
            <Transform />
            <StandOut />
        </div>
    );
}

export default App;
