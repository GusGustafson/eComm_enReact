import { useState } from "react";
import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "root@root" && password === "1234") {
      alert("Sesión iniciada");
    } else {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ejemplo: augusto@gmail.com"
            onChange={handleUsername}
          />
          <div className="error">Introduce una dirección correcta.</div>
        </div>
        <div className="input-group mt-3">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            onChange={handlePassword}
          />
          <div className="error">Introduce una contraseña correcta.</div>
        </div>
        <input
          type="submit"
          value="Iniciar sesión"
          className="button button-resalto"
        />
      </form>
    </>
  );
}
