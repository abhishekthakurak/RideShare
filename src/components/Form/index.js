import Input from "../Input";

export default class Form {
  constructor({ questions, state }) {
    this.questions = questions;
    this.state = state;
  }

  getFormElements(question) {
    const { id } = question;
    const input = new Input({data: question, value: this.state[id]})

    return input.render();
  }

  render() {
    return this.questions
      .map(question => this.getFormElements(question))
      .join("");
  }
}
