import { useState } from "react";
import { Formik } from "formik";
import { useFormik } from "formik";
import { LoginFormikBasicSchema } from "./LoginFormikBasicSchema";
import LoginFormikBasicView from "./LoginFormikBasicView";
import {initialValues} from "./utils/form";
import { useAuthContext } from "../../contexts/AuthContext";


export default function LoginFormikBasic() {
  const { login } = useAuthContext();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {values, touched, errors, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues,
    validationSchema: LoginFormikBasicSchema,
    onSubmit,
  });
  
  function onSubmit(values, actions) {
      login(values);
      actions.resetForm();
  }

  return (
    <>
      <Formik
      initialValues={initialValues}
      validationSchema={LoginFormikBasicSchema}
      onSubmit={onSubmit}
      >
        {(props) => <LoginFormikBasicView formik={props} />}
        </Formik>
    </>
  );
}
