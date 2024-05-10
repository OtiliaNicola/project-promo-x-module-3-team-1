<<<<<<< HEAD
import "../styles/App.scss";
import companyLogo from "../images/laptop-code-solid.svg";
import logoSponsor from "../images/adalab.png";
import {useState} from "react";

function App() {
  const [inputData, setInputData] = useState({
    //creamos variable de estado y sus propiedades
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });

  const handleChange = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;

    //spread operator:
    //setLoQueSea({...variableQueContieneElObjeto, propiedarACambiar: valor})

    setInputData({...inputData, [id]: value})


    // if (id === "name") {
    //   setInputData({ ...inputData, name: value });
    // } else if (id === "slogan") {
    //   setInputData({ ...inputData, slogan: value });
    // } else if (id === "technologies") {
    //   setInputData({ ...inputData, technologies: value });
    // } else if (id === "repo") {
    //   setInputData({ ...inputData, repo: value });
    // } else if (id === "demo") {
    //   setInputData({ ...inputData, demo: value });
    // } else if (id === "desc") {
    //   setInputData({ ...inputData, desc: value });
    // } else if (id === "autor") {
    //   setInputData({ ...inputData, autor: value });
    // } else if (id === "job") {
    //   setInputData({ ...inputData, job: value });
    // } else if (id === "image") {
    //   setInputData({ ...inputData, image: value });
    // } else if (id === "photo") {
    //   setInputData({ ...inputData, photo: value });
    // }
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <a
            className="header__brand"
            href="./"
            title="Haz click para volver a la página inicial"
          >
            <img
              className="header__companyLogo"
              src={companyLogo}
              alt="Logo proyectos molones"
            />
            <h1 className="header__title">Proyectos molones</h1>
          </a>
          <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab" />
        </header>

        <main className="main">
          <section className="hero">
            <h2 className="title">Proyectos molones</h2>
            <p className="hero__text">
              Escaparate en línea para recoger ideas a través de la tecnología
            </p>
            <a className="button--link" href="./">
              Ver proyectos
            </a>
          </section>

          <section className="preview">
            <div className="projectImage"></div>
            <article className="card">
              <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">
                  Personal project card
                </span>
              </h2>

              <div className="card__author">
                <div className="card__authorPhoto"></div>
                <p className="card__job"> {inputData.job || "Full stack Developer"}</p>
                <h3 className="card__name">{inputData.autor || "Emmelie Björklund"}</h3>
              </div>

              <div className="card__project">
                <h3 className="card__nameProject">
                  {inputData.name || "Elegant Workspace"}
                </h3>
                <p className="card__slogan">
                  {inputData.slogan || "Diseños Exclusivos"}
                </p>
                <h3 className="card__descriptionTitle">Product description</h3>
                <p className="card__description">
                  {inputData.desc || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipiscivitae ratione"}

                </p>

                <div className="card__technicalInfo">
                  <p className="card__technologies">{inputData.technologies || "React JS - HTML - CSS"}</p>

                  <a
                    className="icon icon__www"
                    href={inputData.demo} //hacer validación
                    title="Haz click para ver el proyecto online"
                    target='_blank'
                  >
                    Web link
                  </a>
                  <a
                    className="icon icon__github"
                    href={`https://github.com/${inputData.repo}`} //hacer validación
                    title="Haz click para ver el código del proyecto"
                    target='_blank'
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </article>
          </section>
          <form className="addForm">
            <h2 className="title">Información</h2>
            <fieldset className="addForm__group">
              <legend className="addForm__title">
                Cuéntanos sobre el proyecto
              </legend>
              <input
                className="addForm__input"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre del proyecto"
                onChange={handleChange}
              />
              <input
                className="addForm__input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
                onChange={handleChange}
              />
              <div className="addForm__2col">
                <input
                  className="addForm__input"
                  type="url"
                  name="repo"
                  id="repo"
                  placeholder="Repositorio"
                  onChange={handleChange}
                />
                <input
                  className="addForm__input"
                  type="url"
                  name="demo"
                  id="demo"
                  placeholder="Demo"
                  onChange={handleChange}
                />
              </div>
              <input
                className="addForm__input"
                type="text"
                name="technologies"
                id="technologies"
                placeholder="Tecnologías"
                onChange={handleChange}
              />
              <textarea
                className="addForm__input"
                type="text"
                name="desc"
                id="desc"
                placeholder="Descripción"
                rows="5"
                onChange={handleChange}
              ></textarea>
            </fieldset>

            <fieldset className="addForm__group">
              <legend className="addForm__title">
                Cuéntanos sobre la autora
              </legend>
              <input
                className="addForm__input"
                type="text"
                name="autor"
                id="autor"
                placeholder="Nombre"
                onChange={handleChange}
              />
              <input
                className="addForm__input"
                type="text"
                name="job"
                id="job"
                placeholder="Trabajo"
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="addForm__group--upload">
              <label htmlFor="image" className="button">
                Subir foto del proyecto
              </label>
              <input
                className="addForm__hidden"
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
              />
              <label htmlFor="photo" className="button">
                Subir foto de la autora
              </label>
              <input
                className="addForm__hidden"
                type="file"
                name="photo"
                id="photo"
                onChange={handleChange}
              />
              <button className="button--large">Guardar proyecto</button>
            </fieldset>
          </form>
        </main>

        <footer className="footer">
          <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab" />
        </footer>
      </div>
    </>
  );
}

export default App;
=======
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
>>>>>>> c0e33e6cf1b44a45c10f3d767a475d47d27a345d
