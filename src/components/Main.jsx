import CardPreview from "./CardPreview";
import Form from "./Form";
import { useState } from "react";

function Main() {
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
  return (
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
      <CardPreview data={inputData} />
      <Form />
    </main>
  );
}

export default Main;
