import * as yup from "yup"

export const loginFormSchema = yup.object({
  username: yup.string().required("El nombre de usuario es requerido."),
  password: yup.string().required("La contraseña es requerida.")
  // .matches(
  //   /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   "La contraseña debe tener un mínimo de 8 caracteres, una letra mayúscula, un número y un carácter especial."
  // )
})
