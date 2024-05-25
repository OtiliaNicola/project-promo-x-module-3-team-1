import { Link } from "react-router-dom";

function Landing () {
  return (
    <>
      <h1>Mis proyectos molones</h1>
      <Link to="/main">
        <button>Nuevo proyecto</button>
      </Link>
      <button>Catálogo de Proyectos</button>
    </>
  )
}

export default Landing