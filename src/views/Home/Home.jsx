import Navbar2 from '../../components/Navbar2/Navbar2';
// import Login from "../../components/Login/Login";
import LoginFormikBasic from "../../components/LoginFormikBasic/LoginFormikBasic";
import RegistrationFormik from '../../components/RegistrationFormik/RegistrationFormik';

export default function Home() {
  return (
    <>
      <Navbar2 />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Iniciar sesión</h3>
              <p>Accede con tus datos actuales</p>
              {/* <Login /> */}
              <LoginFormikBasic />
            </div>
          </div>
          <div className="col">
            <div className="caja">
              <h3>Regístrate</h3>
              <p>Crea una cuenta para conseguir tu primer descuento como cliente</p>
              <RegistrationFormik />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
