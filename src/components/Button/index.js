import "./style.css";
export default class Button {
  constructor({ id, btnText, className }) {
    this.id = id;
    this.btnText = btnText;
    this.className = className
  }

  render() {
    return `<button id=${this.id} class="btn ${this.className}"
    }>${this.btnText}</button>`;
  }
}
