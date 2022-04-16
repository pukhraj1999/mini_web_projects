import "./Card.css";
function Card({ task, desc }) {
  return (
    <>
      <div className="card">
        <h3>{task}</h3>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default Card;
