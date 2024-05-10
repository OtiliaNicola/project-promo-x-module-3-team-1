function Button(props) {
  return (
    <div>
      <label htmlFor={props.btnOther} className="button">
        {props.text}
      </label>
      <input className="addForm__hidden" type="file" name={props.btnOther} id={props.btnOther}  />
    </div>
  );
}

export default Button;
