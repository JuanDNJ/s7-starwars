import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./routes/AppRoutes.jsx";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
