import { TextField, Alert, Button } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import { Form } from "formik";

export default function RegistrationFormikView({ formik }) {
  const { errorMessage } = useAuthContext();
  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        required
        id="regName"
        label="Nombre"
        name="regName"
        size="large"
        value={values.regName}
        onChange={handleChange}
        error={touched.regName && Boolean(errors.regName)}
        helperText={touched.regName && errors.regName}
      />
      <TextField
        margin="normal"
        required
        id="regSurname"
        label="Apellidos"
        name="regSurname"
        size="large"
        value={values.regSurname}
        onChange={handleChange}
        error={touched.regSurname && Boolean(errors.regSurname)}
        helperText={touched.regSurname && errors.regSurname}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="regEmail"
        label="Dirección de correo electrónico"
        name="regEmail"
        type="email"
        size="large"
        value={values.regEmail}
        onChange={handleChange}
        error={touched.regEmail && Boolean(errors.regEmail)}
        helperText={touched.regEmail && errors.regEmail}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="regPassword"
        label="Contraseña"
        name="regPassword"
        type="password"
        size="large"
        value={values.regPassword}
        onChange={handleChange}
        error={touched.regPassword && Boolean(errors.regPassword)}
        helperText={touched.regPassword && errors.regPassword}
      />
      {errorMessage ? (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      ) : null}
      <Button type="submit" fullWidth variant="contained" size="large">
        Registrar usuario
      </Button>
    </Form>
  );
}
