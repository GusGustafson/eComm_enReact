import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import {Link} from 'react-router-dom';

function Header() {
  return (
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
        {/* <a
          href="carrito.html"
          name="carrito"
          className="button button-resalto"
          id="comprar"
          Carrito<span>1</span>
        </a>
        > */}
      </div>
    </header>
  );
}

export default Header;
