import "./style";
export default class Form {
  constructor({ questions, state }) {
    this.questions = questions;
    this.state = state;
  }

  getFormElements(question) {
    const { type, name, id, isError, placeholder, errorMsg } = question;
    return `
    <div class='input-wrap'>
      <div class='field-lbl'>${name}</div>
      <input
        class='input'
        value='${this.state[id]}'
        id='${id}'
        placeholder='${placeholder}'
        type='${type}'
      />
      ${isError ? `<span class="inp-error">${errorMsg}</span>` : ""}
  </div>`;
  }

  render() {
    return this.questions
      .map(question => this.getFormElements(question))
      .join("");
  }
}
