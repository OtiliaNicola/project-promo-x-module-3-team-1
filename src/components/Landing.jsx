import { Link } from "react-router-dom";
import "../styles/App.scss";

function Landing () {
  return (
    <>
    <main className="main--landing">
      <h1 className="title">Mis proyectos molones</h1>
      <Link to="/main" className="button--link">
        <button className="button--link">Nuevo proyecto</button>
      </Link>
      <div className="button--link"><button className="button--link">Catálogo de Proyectos</button></div>
      </main>
    </>
  )
}

export default Landing