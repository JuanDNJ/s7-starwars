import "./assets/css/style.css";
import { Provider } from "react-redux";
import { appAuth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./store/slices/user.js";
import { createUser } from "./utils.js";
import ReactDOM from "react-dom/client";
import store from "./store";
import AppRoutes from "./routes/AppRoutes.jsx";
const app = ReactDOM.createRoot(document.getElementById("root"));
// Funcion que se ejecuta cuando iniciamos sessión o creamos una cuenta
onAuthStateChanged(appAuth, (user) => {
  if (user) {
    store.dispatch(setUser({ ...createUser(user) }));
  } else {
    store.dispatch(setUser({}));
  }
});

app.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
