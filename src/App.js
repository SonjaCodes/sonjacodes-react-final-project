import Footer from "./Footer";
import Weather from "./Weather";
import { Container } from "react-bootstrap";
import "./App.css";

export default function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Container className="App-Container">
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
