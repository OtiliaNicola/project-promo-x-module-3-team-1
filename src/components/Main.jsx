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
  //creamos una función para recoger y actualizar los datos que introduce la usuaria en los inputs//
  const changeInputData = (idInput, valueInput) => {
    //con esta función estoy actualizando el objeto de cada input //
    setInputData({ ...inputData, [idInput]: valueInput });
  };

  const updateAvatar = (url, idInput) => {
    setInputData({ ...inputData, [idInput]: url });
  };
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
      <Form changeInputData={changeInputData} updateAvatar={updateAvatar} />
    </main>
  );
}

export default Main;
