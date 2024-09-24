import Footer from "./Footer";
import Toggle from "./Toggle";
import Weather from "./Weather";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <div className="container">
        <Container className="App-Container">
          <div className="Toggle">
            <Toggle toggle={toggle} handleToggle={handleToggle} />
          </div>

          <header className="App-header">
            <img
              src="SonjaCodes Logo.png"
              className="SonjaCodes-logo"
              alt="logo"
            />
          </header>
          <main>
            <Weather defaultCity="Zurich" />
          </main>
        </Container>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
