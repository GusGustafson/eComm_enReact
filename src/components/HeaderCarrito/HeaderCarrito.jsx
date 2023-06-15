import { Link, Outlet } from 'react-router-dom';
import logo from "../../assets/logo.png";
import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

export default function HeaderCarrito() {
  return (
      <header>
      <Outlet />
      <div className="container franja-superior">
      <Link to="/" className="logo">
          <img src={logo} alt="logo" width="50px" />
          {/* Aquí arriba podemos usar el objeto {logo} porque lo hemos importado arriba en la línea 1. HAY QUE HACERLO ASÍ, */}
          {/* o sea, primero hay que importar las imágenes y luego usarlas llamándolas entre llaves. */}
          <h4>My<span className="main-color">Releevant</span>Store</h4>
      </Link>
      </div>
    </header>
  );
}
