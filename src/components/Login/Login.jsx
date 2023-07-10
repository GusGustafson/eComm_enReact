import { useState } from "react";
import LoginView from "./LoginView";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";

export default function Login() {
  // Esta es la función Login nueva, con el login de React:
  const { login } = useAuthContext();
  const [auth, setAuth] = useState({
    email: "",
    password: ""
  });
  
  function handleAuth(e) { // Este evento ("e") es cuando se produce el evento "onChange" (ver línea 26).
    setAuth({
      ...auth, // Esto deja todo el "auth" igual, salvo lo que viene detrás ("e.target.name"), que lo modifica según definamos (línea 17).
      [e.target.name]:e.target.value, // Aquí hacemos que esa parte que hemos sacado del auth en la línea de arriba, la igualemos al value del target.
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    login(auth);
  }

  return <LoginView auth={auth} onChange={handleAuth} onSubmit={onSubmit}/>;

  // Esta es mi función Login antigua, antes de usar el login de react:
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleUsername = (e) => setUsername(e.target.value);
  // const handlePassword = (e) => setPassword(e.target.value);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (username === "augusto@mail.com" && password === "Augusto1234") {
  //     alert("Sesión iniciada");
  //   } else {
  //     alert("Error al iniciar sesión");
  //   }
  // };

  // Este es mi return antiguo, antes de usar el return de react:
  // return (
  //   <>
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-group mt-3">
  //         <label htmlFor="email">Email</label>
  //         <input
  //           type="email"
  //           name="email"
  //           placeholder="Ejemplo: augusto@mail.com"
  //           onChange={handleUsername}
  //         />
  //         <div className="error">Introduce una dirección correcta.</div>
  //       </div>
  //       <div className="input-group mt-3">
  //         <label htmlFor="contrasena">Contraseña</label>
  //         <input
  //           type="password"
  //           name="contrasena"
  //           placeholder="Contraseña"
  //           onChange={handlePassword}
  //         />
  //         <div className="error">Introduce una contraseña correcta.</div>
  //       </div>
  //       <input
  //         type="submit"
  //         value="Iniciar sesión"
  //         className="button button-resalto"
  //       />
  //     </form>
  //   </>
  // );
}
