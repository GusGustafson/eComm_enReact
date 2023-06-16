import Navbar2 from '../../components/Navbar2/Navbar2';
import Login from "../../components/Login";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Iniciar sesión</h3>
              <p>Accede con tus datos anteriores</p>
              <Login />
            </div>
          </div>
          <div className="col">
            <div className="caja">
              <h3>Regístrate</h3>
              <p>
                Crea una cuenta en My Releevant Store para conseguir tu primer
                descuento como cliente
              </p>
              <form>
                <div className="d-flex justify-content-between">
                  <input type="text" name="nombre" placeholder="Nombre" />
                  <input type="text" name="apellido" placeholder="Apellidos" />
                </div>
                <input type="email" name="email" placeholder="Email" />
                <input
                  type="password"
                  name="contraseña"
                  placeholder="Contraseña"
                />
                <input
                  type="submit"
                  value="Crear cuenta ahora"
                  className="button"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
