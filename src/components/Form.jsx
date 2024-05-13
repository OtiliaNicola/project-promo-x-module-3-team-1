import Button from "./Button";

function Form({ changeInputData, updateAvatar }) {
  const handleChange = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    changeInputData(id, value);

    //falla porque no encuentra el setInputData en el componente
  };
  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>

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
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
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
        <Button
          text="Subir foto del proyecto"
          btnOther="image"
          updateAvatar={updateAvatar}
        />
        <Button
          text="Subir foto de la autora"
          btnOther="photo"
          updateAvatar={updateAvatar}
        />
        <button className="button--large">Guardar proyecto</button>
      </fieldset>
    </form>
  );
}
export default Form;
