import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

function Footer() {
  return (
    <footer className="container">
        <div>
            <img src={logo} alt="logo" width="50px" />
            <h4>My <span style="color: blue;">Releevant</span> Store</h4>
            <div>
                <ul className="menu">
                    <li>Centro de ayuda</li>
                    <li>Servicio al consumidor</li>
                    <li>Escríbenos</li>
                    <li>Servicio telefónico</li>
                </ul>
            </div>
            <div>
                <ul className="menu">
                    <li><a href="politica.html" name="politica">Política de privacidad</a></li>
                    <li>Condiciones de compra</li>
                    <li>Opiniones de clientes</li>
                    <li>Aviso de privacidad y cookies</li>
                </ul>
            </div>
        </div>
        <div>
            <h4>Únete a nuestra newsletter y recibe ofertas diarias</h4>
            <form>
                <input type="email" name="email" placeholder="Introduce tu email" />
                <input type="submit" name="botonSuscribir" value="Suscribirme" />
                <label htmlFor="politica">
                    <input type="checkbox" name="politica" id="politica"/>Acepto la <a href="politica.html" name="politica">política de privacidad</a> de esta web
                </label>
            </form>
            <hr />
            <h4>Síguenos en redes</h4>
            <img src={facebook} alt="iconoFacebook" width="30px" />
            <img src={instagram} alt="iconoInstagram" width="30px" />
            <img src={facebook} alt="iconoFacebook" width="30px" />
            <img src={instagram} alt="iconoInstagram" width="30px" />
        </div>
    </footer>
  );
}

export default Footer;
