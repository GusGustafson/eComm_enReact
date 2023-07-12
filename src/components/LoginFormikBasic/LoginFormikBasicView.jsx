import { TextField, Alert, Button, Typography } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
//import { Form } from "formik";

export default function LoginView({ formik }) {
  const { errorMessage } = useAuthContext();
  const { values, touched, errors, handleChange, handleSubmit } = formik;
  return (
    <form onSubmit={handleSubmit}>
      
      <TextField
        name="email"
        value={values.email}
        label="Email"
        size="large"
        fullWidth="true"
        margin="normal"
        onChange={handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        name="password"
        label="Contraseña"
        size="large"
        fullWidth="true"
        margin="normal"
        value={values.password}
        onChange={handleChange}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      {errorMessage ? (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      ) : null}
      <Button type="submit" variant="contained" color="primary" size="large" fullWidth="true">
        Iniciar sesión
      </Button>
      
    </form>
  );
}
