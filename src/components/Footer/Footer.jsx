import {Link} from 'react-router-dom';
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

export default function Footer() {
  return (
    <footer className="container bg-dark text-light d-flex justify-content-evenly mt-5">
        <div className="container d-flex flex-column w-85 mt-3">
            <div className="container d-flex">
                <img src={logo} alt="logo" width="50px" />
                <h4>My <span className="main-color">Releevant</span> Store</h4>
            </div>
            <div className="d-flex mt-5">
                <div>
                    <ul className="menu d-flex flex-column ms-5">
                        <li>Centro de ayuda</li>
                        <li>Servicio al consumidor</li>
                        <li>Escríbenos</li>
                        <li>Servicio telefónico</li>
                    </ul>
                </div>
                <div>
                    <ul className="menu d-flex flex-column ms-5">
                        <li><Link to="policy">Política de privacidad</Link></li>
                        <li>Condiciones de compra</li>
                        <li>Opiniones de clientes</li>
                        <li>Aviso de privacidad y cookies</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container d-flex flex-column mt-3">
            <h4>Únete a nuestra newsletter y recibe ofertas diarias</h4>
            <form>
                <div className="d-flex flex-row">
                <input type="email" name="emailBox" placeholder="Introduce tu email" className="d-flex w-75 me-2" />
                <Link to="/" className="button">Suscribirme</Link>
                </div>
                <label htmlFor="politica">
                    <input type="checkbox" name="politicaCheckbox" id="politica" />Acepto la <Link to="policy">Política de privacidad</Link> de esta web
                </label>
            </form>
            <hr />
            <h4>Síguenos en redes</h4>
            <div>
                <img src={facebook} alt="iconoFacebook" width="30px" />
                <img src={instagram} alt="iconoInstagram" width="30px" />
                <img src={facebook} alt="iconoFacebook" width="30px" />
                <img src={instagram} alt="iconoInstagram" width="30px" />
            </div>
        </div>
    </footer>

    /* FOOTER de Pablo
    <footer className="bg-dark text-light py-5">
        <div className="container d-flex">
            <div className="w-100">
                <a className="h4 navbar-brand " href="#">My<span className="text-info">Video</span>Game</a>
                    <div className="d-flex gap-3 mt-5">
                        <ul>
                            <li>Política</li>
                            <li>Política</li>
                            <li>Política</li>
                            <li>Política</li>
                            <li>Política</li>
                        </ul>
                        <ul>
                            <li>Política</li>
                            <li>Política</li>
                            <li>Política</li>
                            <li>Política</li>
                            <li>Política</li>
                        </ul>
                    </div>
            </div>
            <div className="w-100">
                <h4>Suscribete a la newsletter</h4>
                <p>Es genial!</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-primary " type="button" id="button-addon2">Suscríbete</button>
                </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Acepto la politica
                </label>
            </div>
            <div className="d-flex gap-3">
                <p>Síguenos en redes:</p>
                <a href="#" ><i className="bi bi-instagram text-light"></i></a>
                <a href="#" ><i className="bi bi-youtube text-light"></i></a>
                <a href="#" ><i className="bi bi-facebook text-light"></i></a>
                <a href="#" ><i className="bi bi-twitch text-light"></i></a>
            </div>
        </div>
    </div>
    </footer>*/
  );
}
