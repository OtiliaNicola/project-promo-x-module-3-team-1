import "../styles/App.scss";
import logoSponsor from "../images/adalab.png";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />

        <footer className="footer">
          <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab" />
        </footer>
      </div>
    </>
  );
}

export default App;
