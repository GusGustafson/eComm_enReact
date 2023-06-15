import { Link, useLocation } from 'react-router-dom';
import Button from "../../components/Button";
import logo from "../../assets/logo.png";
import "../../style.css";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <>
    {pathname === "/carrito" ? (
      <header>
        <div className="container franja-superior d-flex justify-content-between">
            <div className="d-flex">
                <Link to="/" className="logo">
                <img src={logo} alt="logo" width="50px" />
                <h4>My<span className="main-color">Releevant</span>Store</h4>
                </Link>
            </div>
            <div>
                <Link to="/carrito">
                <Button buttonClass="button button-secundario" text="Carrito" />
                </Link>
                <i className="bi bi-arrow-right-circle"></i>
                <Link to="/carrito">
                <Button buttonClass="button button-secundario" text="Forma de pago" />
                </Link>
                <i className="bi bi-arrow-right-circle"></i>
                <Link to="/carrito">
                <Button buttonClass="button button-secundario" text="Finalizar pedido" />
                </Link>
            </div>
        </div>
    </header>
    ) : (
      <header>
        <div className="container franja-superior">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" width="50px" />
            {/* Aquí arriba podemos usar el objeto {logo} porque lo hemos importado arriba en la línea 1. HAY QUE HACERLO ASÍ, */}
            {/* o sea, primero hay que importar las imágenes y luego usarlas llamándolas entre llaves. */}
            <h4>My<span className="main-color">Releevant</span>Store</h4>
        </Link>
          <div className="buscador-header">
            <input
              type="search"
              name="cuadroBusqueda"
              placeholder="Buscar productos..."
            />
            <button className="button button-secundario">
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="d-flex">
          <Link to="carrito">
            <Button buttonClass="button button-resalto" text="Carrito" id="comprar" />
          </Link>
            <span>1</span>
          </div>
        </div>
      </header>
    )}
    </>
  );
}
