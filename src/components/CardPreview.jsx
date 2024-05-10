import Card from "./Card";

function CardPreview(props) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <Card data={props.data}/>
    </section>
  );
}

export default CardPreview;
