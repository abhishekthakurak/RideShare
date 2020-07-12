import PageFrame from "../../components/PageFrame";
import Button from "../../components/Button";
import Form from "../../components/Form";
import questions from "./questions";
import "../../commonStyles/screensStyle.css";
import validate from "../../utils/validate";
import { checkForUser, updateUser } from "../../utils/storage";


/** Tried making this similar to react thing because it is easy to understand
    as people do have this mental model :-)
**/

export default class Login {
  constructor(reRender, isResetPassword) {
    this.reRender = reRender;
    this.isResetPassword = isResetPassword
    this.questions = questions;
    this.actionFailedMsg = null;
    this.state = {
      username: "",
      password: ""
    };
    this.form = new Form({
      questions: this.questions,
      state: this.state
    });
  }

  onInputChange(id, value) {
    this.state[id] = value;
  }

  resetPassword () {
    if(updateUser(this.state)) {
      window.open("/login", "_self");
      return;
    }
    this.actionFailedMsg = 'Invalid user';
  }

  userLogin() {
    if(checkForUser(this.state)) {
      window.open("/search", "_self");
      return;
    }
    this.actionFailedMsg = 'Username or Password is invalid';
  }

  onLogin() {
    const { questions, isValidated } = validate(this.questions, this.state);
    this.questions = questions;
    if (isValidated) {
      if (this.isResetPassword) {
        this.resetPassword()
      } else { 
        this.userLogin()
      }
    }
    this.reRender();
  }

  getLoginContent() {
    const loginBtn = new Button({
      id: "login-btn",
      btnText: this.isResetPassword ? "RESET PASSWORD":"LOGIN",
      className: this.isResetPassword ? 'btn-margin' : ''
    });
    return `
    <div class='section'>
      <div class='border-section'>
      ${
        this.actionFailedMsg
          ? `<div class="error-prompt">${this.actionFailedMsg}</div>`
          : ""
      }

        ${this.form.render()}
        ${!this.isResetPassword ? `<a class='fgt-pass' href='/forgot-password'>FORGOT PASSWORD?</a>` : ''}
        ${loginBtn.render()}
      </div>
      <div class='footer-cta'>
      ${!this.isResetPassword 
        ? `Don't have an account <a class='register' href='/register'>REGISTER NOW</a>`
        : `<a class='register' href='/login'>LOGIN NOW</a>`}
      </div>
    </div>
    `;
  }

  render() {
    const pageFrame = new PageFrame(this.isResetPassword ? "Reset Password" : "Login To App", this.getLoginContent());
    return pageFrame.render();
  }

  attachListener() {

    // delegating events

    const containerDiv = document.getElementById("app"); // attaching events on the top
    containerDiv.onclick = event => {
      if (event.target.id === "login-btn") {
        this.onLogin();
      }
    };
    containerDiv.oninput = event => {
      this.onInputChange(event.target.id, event.target.value);
    };
  }
}
