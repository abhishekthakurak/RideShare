import { emailValidator, phoneValidator } from "../../utils/validatorsRegex";


// Form Fields
export default [
  {
    id: "username",
    name: "Username",
    type: "text",
    placeholder: "10-digit mobile number or email ID",
    validate: value => emailValidator(value) || phoneValidator(value),
    errorMsg: "Invalid username!"
  },
  {
    id: "password",
    name: "Password",
    type: "password",
    placeholder: "password of length 6 or more",
    validate: value => value && value.trim().length >= 6,
    errorMsg: "Invalid password!"
  }
];
