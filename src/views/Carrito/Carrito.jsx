import { Link } from 'react-router-dom';
import Card from "../../components/Card";
import { card } from "../../components/Card/CardsDummy";
import Button from "../../components/Button";
import "../../style.css";

export default function Carrito() {
    return (
      <>
        <main className="container">
        <div className="d-flex justify-content-between mt-3">
            <h2>Mi carrito</h2>
            <Link to="/allproducts">
                <Button buttonClass="button button-secundario" text="Seguir comprando" />
            </Link>
        </div>
        <div className="d-flex gap-5 mt-3 mb-3">
        <section>
            <div className="d-flex flex-column">
            <div className="d-flex justify-content-between gap-2 mb-1">
                <div className="aProductSmall">
                <img
                 src="https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0"
                 alt="producto01"
                 name="producto01"
                 width="100px" />
                 </div>
                <div>
                <h3>Bicicleta Rock Ridee</h3>
                <p><b>399,50</b> <i className="bi bi-currency-euro"></i></p>
                </div>
                <input type="number" name="cantidad" min="0" max="10" value="1" />
                <Button buttonClass="button button-secundario" text="Eliminar" />
            </div>
            <div className="d-flex justify-content-between gap-2 mb-1">
            <div className="aProductSmall">
                <img
                 src="https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0"
                 alt="producto01"
                 name="producto01"
                 width="100px" />
                 </div>
                <div>
                <h3>Bicicleta Rock Ridee</h3>
                <p><b>399,50</b> <i className="bi bi-currency-euro"></i></p>
                </div>
                <input type="number" name="cantidad" min="0" max="10" value="1" />
                <Button buttonClass="button button-secundario" text="Eliminar" />
            </div>
            <div className="d-flex justify-content-between gap-2 mb-1">
            <div className="aProductSmall">
                <img
                 src="https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0"
                 alt="producto01"
                 name="producto01"
                 width="100px" />
                 </div>
                <div>
                <h3>Bicicleta Rock Ridee</h3>
                <p><b>399,50</b> <i className="bi bi-currency-euro"></i></p>
                </div>
                <input type="number" name="cantidad" min="0" max="10" value="1" />
                <Button buttonClass="button button-secundario" text="Eliminar" />
            </div>
        </div>
        </section>
        <section className="caja d-flex flex-column" >
            <h3>Resumen de pedido</h3>
            <p>Continúa con el proceso de compra para conectar tu Coinbase Wallet o pagar con tu tarjeta.</p>
            <p><b>1.999,95</b> <i className="bi bi-currency-euro"></i></p>
            <Link to="/carrito">
                <Button buttonClass="button button-primario" text="Proceder al pago" />
            </Link>
        </section>
        </div>
        <h2>Otros usuarios también compraron</h2>
        <Card cards={card} />
        </main>
      </>
    );
  }
