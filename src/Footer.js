import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded with love by{" "}
      <a href="https://github.com/SonjaCodes" target="_blank" rel="noreferrer">
        Sonja Kolmer
      </a>
      . It is open-source on{" "}
      <a
        href="https://github.com/SonjaCodes/sonjacodes-react-weather-app"
        target="_blank"
        rel="noreferrer">
        Github
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://app.netlify.com/sites/sonjacodes-react-weather-app/overview"
        target="_blank"
        rel="noreferrer">
        Netlify
      </a>
      .
    </footer>
  );
}
