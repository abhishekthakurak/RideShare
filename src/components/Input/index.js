import "./style";
export default class Input {
  constructor({ data, value, className }) {
    this.data = data;
    this.value = value;
    this.className = className;
  }

  render() {
    const { type, name, id, isError, placeholder, errorMsg } = this.data;
    return `
        <div class='input-wrap ${this.className ? this.className : ''}'>
        <div class='field-lbl'>${name}</div>
        <input
            class='input'
            value='${this.value}'
            id='${id}'
            placeholder='${placeholder}'
            type='${type}'
        />
        ${isError ? `<span class="inp-error">${errorMsg}</span>` : ""}
    </div>`;
  }
}
