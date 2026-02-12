import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().matches(/^[0-9]{10}$/, "Must be 10 digits").required(),
  email: yup.string().email("Invalid email").required(),
});