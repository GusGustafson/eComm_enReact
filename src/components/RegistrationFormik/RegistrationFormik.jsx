import { useState } from "react";
import { Formik } from "formik";
import { useFormik } from "formik";
import { RegistrationFormikSchema } from "./RegistrationFormikSchema";
import RegistrationFormikView from "./RegistrationFormikView";
import { initialValues } from "./utils/form";
import { useAuthContext} from "../../contexts/AuthContext";

export default function RegistrationFormik() {
  const { registration } = useAuthContext();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { values, touched, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema: RegistrationFormikSchema,
      onSubmit,
    });
    const [auth, setAuth] = useState({
        email: "",
        password: "",
      });

      function handleAuth(e) {
        setAuth({
          ...auth,
          [e.target.name]: e.target.value,
        });
      }

  function onSubmit(e, actions) {
    // e.preventDefault();
    registration(auth);
    actions.resetForm();
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={RegistrationFormikSchema}
        auth={auth}
        onChange={handleAuth}
        onSubmit={onSubmit}
      >
        {(props) => <RegistrationFormikView formik={props} />}
      </Formik>
    </>
  );
}
