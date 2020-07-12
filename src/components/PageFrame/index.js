import "./style.css";
import logo from "../../../assets/car.png";
export default class PageFrame {
  constructor(header, children, isLogin) {
    this.header = header;
    this.children = children;
    this.isLogin = isLogin
  }

  render() {
    return `
      <div class='page-wrap'>
        <div class='content'>
          <div class='header'>
            <img class='logo' src=${logo} alt='Ride Sharing'/>
            ${this.header}
            ${this.isLogin ? `<div class='logout' id='logout'>Logout</div>`:''}
          </div>
         ${this.children}
        </div>
      </div>
    `;
  }
}
