import * as yup from "yup";

export const logInSchema = yup.object().shape({
    email:yup.string().required("!Please fill the email field"),
    password:yup.string().required("!Please fill the password field")
  });