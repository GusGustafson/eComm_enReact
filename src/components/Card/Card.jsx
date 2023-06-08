import "../../style.css";
import Button from "../../components/Button";

function Card({ cards }) {
  return (
    <div className="container d-flex justify-content-evenly mt-5" >
      {/* Esta línea de arriba la incluyo para que me ponga las cards una junto a otra, no una encima de otra. */}
      {cards.map((card, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
        <img
            src={card.image}
            alt="bicicleta"
        />
        <div className="contenido-producto">
            <div className="card-titulo">
            <h5>{card.title}</h5>
            <div className="precio">{card.precio}<i className="bi bi-currency-euro main-color"></i></div>
            </div>
            <div className="rating">
                <i className="bi bi-star-fill main-color"></i>
                <i className="bi bi-star-fill main-color"></i>
                <i className="bi bi-star-fill main-color"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </div>
            <p>{card.descripcion}</p>
            <div className="card-actions">
            <Button buttonClass="button anadir" text="Añadir" />
            <Button buttonClass="button button-secundario" text="Ver" />
            </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
