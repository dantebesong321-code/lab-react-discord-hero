import "./App.css";
import MainHeader from "./components/MainHeader";
import Buttons from "./components/Buttons";
import HeroImage from "./assets/discord-background.png";

function App() {
  return (
    <section className="hero-section">
      <MainHeader />
      <Buttons />
      <div id="hero-image">
        <img src={HeroImage} width="780px" alt="Discord hero" />
      </div>
    </section>
  );
}

export default App;
