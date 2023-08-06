import { TextField, Alert, Button } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginView({ auth, onChange, onSubmit }) {
  const { errorMessage } = useAuthContext();

  return (
    <form onSubmit={onSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Dirección de correo electrónico"
        name="email"
        value={auth.email}
        onChange={onChange}
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="password"
        value={auth.password}
        onChange={onChange}
        autoComplete="current-password"
      />
      {errorMessage ? (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      ) : null}
      <Button type="submit" fullWidth variant="contained" size="large">
        Iniciar sesión
      </Button>
    </form>
  );
}
