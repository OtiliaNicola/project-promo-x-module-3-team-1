import "../styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";


function App () {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/main" element={ <Main /> } />
          <Route path="*" element={ <p>Página no encontrada</p> } />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
