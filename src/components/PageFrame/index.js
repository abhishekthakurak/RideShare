import "./style.css";
import logo from "../../../assets/car.png";
export default class PageFrame {
  constructor(header, children) {
    this.header = header;
    this.children = children;
  }

  render() {
    return `
      <div class='page-wrap'>
        <div class='content'>
          <div class='header'>
            <img class='logo' src=${logo} alt='Ride Sharing'/>
            ${this.header}
          </div>
         ${this.children}
        </div>
      </div>
    `;
  }
}
