import PageFrame from "../../components/PageFrame";
import Button from "../../components/Button";
import Form from "../../components/Form";
import questions from "./questions";
import "../../commonStyles/screensStyle.css";
import validate from "../../utils/validate";
import { addUser } from "../../utils/storage";


export default class Register {

  constructor(reRender) {
    this.reRender = reRender;
    this.questions = questions;
    this.actionFailedMsg = null;
    this.state = {
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      reEnterPassword: "",
      carModel: ""
    };
    this.form = new Form({
      questions: this.questions,
      state: this.state
    });
  }

  onInputChange(id, value) {
    this.state[id] = value;
  }

  onRegister() {
    const { questions, isValidated } = validate(this.questions, this.state);
    this.questions = questions;
    if (isValidated) {
      if(addUser(this.state)) {
        window.open("/login", "_self");
        return;
      }
      this.actionFailedMsg = 'Email or mobile already registered <br /> Please follow Login';

    }
    this.reRender();
  }

  getRegisterContent() {
    const registerBtn = new Button({
      id: "register-btn",
      btnText: "REGISTER",
      className: 'btn-margin'
    });
    return `<div class='section'>
    <div class='border-section'>
      ${
        this.actionFailedMsg
          ? `<div class="error-prompt">${this.actionFailedMsg}</div>`
          : ""
      }
      ${this.form.render()}
      ${registerBtn.render()}
    </div>
    <div class='footer-cta'>
    Already have an account?
    <a class='register' href='/login'>LOGIN NOW</a>
    </div>
  </div>`;
  }

  render() {
    const pageFrame = new PageFrame(
      "Register With App",
      this.getRegisterContent()
    );
    return pageFrame.render();
  }

  attachListener() {
    const containerDiv = document.getElementById("app");
    containerDiv.onclick = event => {
      if (event.target.id === "register-btn") {
        this.onRegister();
      }
    };
    containerDiv.oninput = event => {
      this.onInputChange(event.target.id, event.target.value);
    };
  }
}
