import { Link } from "react-router-dom";
import "../../style.css";
{
  /* Aquí arriba importo mi archivo CSS para que pueda usarlo en todo este componente */
}

export default function Navbar2({withUser}) {
  return (
    <nav className="container" id="navegacion">
      <div className="col-izq">
        <ul className="menu d-flex gap-3">
          <li>
            <Link to="/allproducts">Todos los productos</Link>
          </li>
          <li>
            <Link to="/nosotros">Sobre nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/gadgets">Gadgets</Link>
          </li>
          <li>
            <Link to="/ofertas">Ofertas</Link>
          </li>
        </ul>
      </div>

    {withUser ? (<div className="col-der">
        <ul className="menu d-flex gap-3">
          <li>
            <Link to="/misPedidos">Mis pedidos</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>) : null
    }
      
    </nav>
  );
}

// Acuérdate de poner la barra diagonal delante del valor en todos los "<Link to="">" para que te lleven al raíz, no a "padre/valor".