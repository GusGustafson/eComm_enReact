import { createContext, useState, useContext } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext({
  user: null,
  errorMessage: null,
  login: () => {},
  logout: () => {},
  registration: () => {},
});

let USER_KEY = "USER_KEY"; // Aquí creamos la key que identifica al usuario que ha iniciado sesión.
let USER_TOKEN = "USER_TOKEN";

export default function AuthContextProvider({ children }) {
  // Este "children" que va a recibir es exactamente toda nuestra app, es decir, todo lo que abarca el contexto (context) en la app.
  const [user, setUser] = useState(
    localStorage.getItem(USER_KEY) ?? null // Aquí obtenemos la key del usuario desde localStorage.
  );
  const [errorMessage, setErrorMessage] = useState(null);

  // Función login: comprobamos si las credenciales que nos llegan desde el formulario son válidas, establecemos el usuario con su token,
  // almacenamos su key con su email como valor en localStorage y ponemos como null el mensaje de error de login para que no se muestre.
  async function login({ email, password }) {
    try {
      // email = document.getElementById("email").value;
      // password = document.getElementById("password").value;
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      if (response.ok) {
        const token = await response.json();
        const user = jwtDecode(token.jwt);
        console.log("Usuario logueado correctamente");
        setUser(user);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        localStorage.setItem(USER_TOKEN, token.jwt);
        setErrorMessage(null);
      } else {
        console.log("Usuario no válido");
        setErrorMessage("Email o contraseña incorrectos.");
      }
    } catch (error) {
      console.log("Error al iniciar sesión", error);
      throw new Error(error);
    }
  }

  // Función logout: al hacer logout, eliminamos la key del usuario de localStorage y establecemos el usuario como null.
  function logout() {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_TOKEN);
    setUser(null);
  }

  // Función registration
  function registration({ name, surname, email, password }) {
    name = document.getElementById("regName").value;
    surname = document.getElementById("regSurname").value;
    email = document.getElementById("regEmail").value;
    password = document.getElementById("regPassword").value;

    fetch("http://localhost:3000/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Usuario nuevo registrado correctamente");
          login({ email, password });
          setErrorMessage(null);
        } else {
          console.log("Datos de registro de usuario no válidos");
          setErrorMessage("Datos para registro incorrectos.");
        }
      })
      .catch((error) => {
        console.log("Error al registrar usuario", error);
      });
  }

  const value = {
    user,
    errorMessage,
    login,
    logout,
    registration,
  };

  // Devolvemos ("return") el proveedor del contexto, con "{children}", que es toda nuestra app, la que tendrá acceso al contexto:
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
// Esta última (líneas 106-109) es una función que creamos para no estar todo el rato exportando e importando useContext.
// Esta función ya lo hace automáticamente.
