import "./styles.css";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Success from "./pages/Success";
import { isLogin, logout } from "./utils/storage";

let component;

// fetch component based on path
const authProtectedRoute = ['/success', '/search']
function getRouteBasedComponent() {
  const path = window.location.pathname;
  if (!isLogin() && authProtectedRoute.includes(path)) {
    window.open('/', '_self')
    return
  }
  switch (path) {
    case "/":
    case "/login":
      component = new Login(reRender);
      break;
    case "/register":
      component = new Register(reRender);
      break;
    case "/search":
      component = new Search(reRender);
      break;
    case "/forgot-password":
      component = new Login(reRender, true);
      break;
    case "/success":
      component = new Success();
      break;
    default:
      return `<div>Oops! this page doesn't exist (code: 404)</div>`;
  }
  return component.render();
}


// we have to manually render application so we have to pass this
function reRender() {
  document.getElementById("app").innerHTML = component.render();
}

function render() {
  document.getElementById("app").innerHTML = getRouteBasedComponent();
  component.attachListener && component.attachListener(); // attach listener only once
}

render();
let logoutElement = document.getElementById('logout')
logoutElement.onclick = function (event) {
  event.stopPropagation()
  logout()
}
