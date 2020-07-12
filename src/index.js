import "./styles.css";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register";
import Search from "./pages/Search";

let component;

// fetch component based on path

function getRouteBasedComponent() {
  const path = window.location.pathname;
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
  component.attachListener(); // attach listener only once
}

render();
