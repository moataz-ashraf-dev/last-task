import * as yup from "yup";

export const loginValidation = yup.object({
  identifier: yup.string().trim().required("Required"),
  password: yup.string().trim().required(),
});
