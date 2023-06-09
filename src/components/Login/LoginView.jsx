import { Alert, Button } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginView({ auth, onChange, onSubmit }) {
  const { errorMessage } = useAuthContext();

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mt-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ejemplo: augusto@mail.com"
          value={auth.email}
          onChange={onChange}
        />
        <div className="error">Introduce una dirección correcta.</div>
      </div>
      <div className="input-group mt-3">
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          value={auth.password}
          onChange={onChange}
        />
        <div className="error">Introduce una contraseña correcta.</div>
        {errorMessage ? (
          <Alert variant="outlined" severity="error">
            {errorMessage}
          </Alert>
        ) : null}
      </div>
      <input
        type="submit"
        value="Iniciar sesión"
        className="button button-resalto"
      />
      {/* <Button type="submit" variant="contained" color="primary">
        Iniciar sesión
      </Button> */}
    </form>
  );
}
