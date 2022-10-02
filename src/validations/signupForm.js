import * as yup from "yup";

export const SignupSchema = yup.object().shape({
    name: yup.string().required('!Please fill'),
    surname: yup.string().required('!Please fill'),
    email:yup.string().required("!Please fill"),
    password:yup.string().required("!Please fill")
  });