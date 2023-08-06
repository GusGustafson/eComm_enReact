import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const RegistrationFormikSchema = yup.object().shape({
  regName: yup
    .string()
    // .name("Introduce un nombre válido.")
    .required("Este campo es obligatorio."),
  regSurname: yup
    .string()
    // .surname("Introduce un apellido válido.")
    .required("Este campo es obligatorio."),
  regEmail: yup
    .string()
    .email("Introduce un email válido.")
    .required("Este campo es obligatorio."),
  regPassword: yup
    .string()
    .matches(passwordRules, {
      message: "Mín 5 caracteres, 1 mayúscula, 1 minúscula y 1 número.",
    })
    .required("Este campo es obligatorio."),
});

// Estas sentencias de YUP están mal. Investiga la sintaxis correcta (regName, regSurname...)
