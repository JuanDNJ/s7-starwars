import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./routes/AppRoutes.jsx";
import { appAuth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
const app = ReactDOM.createRoot(document.getElementById("root"));

import { setUser } from "./store/slices/user.js";

onAuthStateChanged(appAuth, (user) => {
  if (user) {
    console.log(user);

    store.dispatch(
      setUser({
        email: user.email,
        name: !user.displayName
          ? user.email.replace("@gmail.com", "")
          : user.displayName,
        uid: user.uid,
        isLogin: !!user,
      })
    );
  } else {
    console.log("no user");
    store.dispatch(
      setUser({
        email: "",
        name: "",
        uid: "",
        isLogin: false,
      })
    );
  }
  app.render(
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
});
