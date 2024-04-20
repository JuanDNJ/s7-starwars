import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import store from "./store";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <Provider store={store}>
    <App />
  </Provider>
);
