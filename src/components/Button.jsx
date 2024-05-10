function Button(props) {
  return (
    <div>
      <label htmlFor="image" className="button">
        {props.text}
      </label>
      <input className="addForm__hidden" type="file" name="image" id="image" />
    </div>
  );
}

export default Button;
