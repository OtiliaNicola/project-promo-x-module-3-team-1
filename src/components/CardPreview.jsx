import Card from "./Card";

function CardPreview(props) {
  return (
    <section className="preview">
      <div className="projectImage"> <img className="projectImage--img" src={props.data.image} alt="" /> </div>
      <Card data={props.data} />
    </section>
  );
}

export default CardPreview;
