import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

export default function Main() {
  return (
    <main className="container login">
      <div className="caja destacado">
        <h3>Iniciar sesión</h3>
        <p>Accede con tus datos anteriores</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ejemplo: augusto@gmail.com"
            />
            <div className="error">Introduce una dirección correcta.</div>
          </div>
          <div className="input-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input type="password" name="contrasena" placeholder="Contraseña" />
            <div className="error">Introduce una contraseña correcta.</div>
          </div>
          <input
            type="submit"
            value="Iniciar sesión"
            className="button button-resalto"
          />
        </form>
      </div>
      <div className="caja">
        <h3>Regístrate</h3>
        <p>
          Crea una cuenta en My Releevant Store para conseguir tu primer
          descuento como cliente
        </p>
        <form>
          <input type="text" name="nombre" placeholder="Nombre" />
          <input type="text" name="apellido" placeholder="Apellidos" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="contraseña" placeholder="Contraseña" />
          <input type="submit" value="Crear cuenta ahora" className="button" />
        </form>
      </div>
    </main>
  );
}
