import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

function Navigator() {
  return (
    <nav className="container" id="navegacion">
      <div className="col-izq">
        <ul className="menu">
          <li>
            <a className="link" href="productos.html" name="productos">
              Todos los productos
            </a>
          </li>
          <li>
            <a href="nosotros.html" name="indice">
              Sobre nosotros
            </a>
          </li>
          <li>
            <a href="contacto.html" name="contacto">
              Contacto
            </a>
          </li>
          <li>
            <a href="gadgets.html" name="gadgets">
              Gadgets
            </a>
          </li>
          <li>
            <a href="ofertas.html" name="ofertas">
              Ofertas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigator;
