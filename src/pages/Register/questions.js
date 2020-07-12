import { emailValidator, phoneValidator } from "../../utils/validatorsRegex";

export default [
  {
    id: "fullName",
    name: "Full Name",
    type: "text",
    placeholder: "enter your firstName & LastName",
    validate: value => value && value.trim().length > 4,
    errorMsg: "Enter 4 or more characters!"
  },
  {
    id: "email",
    name: "Email Id",
    type: "text",
    placeholder: "enter your email ID",
    validate: value => emailValidator(value),
    errorMsg: "Invalid email!"
  },
  {
    id: "mobileNumber",
    name: "Mobile Number",
    type: "text",
    placeholder: "enter your 10-digit mobile number",
    validate: value => phoneValidator(value),
    errorMsg: "Invalid mobile number!"
  },
  {
    id: "password",
    name: "Password",
    type: "password",
    placeholder: "password of length 6 or more",
    validate: value => value && value.trim().length >= 6,
    errorMsg: "Invalid password!"
  },
  {
    id: "reEnterPassword",
    name: "Re-enter Password",
    type: "password",
    placeholder: "re-enter your password",
    validate: (value, state) => value && state.password === value.trim(),
    errorMsg: "Re-enter password should match password!"
  },
  {
    id: "carModel",
    name: "Car Model",
    type: "text",
    placeholder: "Name the car you have",
    validate: (value) => !!value,
    errorMsg: "Enter car model!"
  }
];
