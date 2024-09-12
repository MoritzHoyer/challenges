// The render function renders the app to the DOM
import App from "./components/App/App.js";

function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
