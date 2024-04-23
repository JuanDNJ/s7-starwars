import { createUserWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import GoToPage from "../components/GoToPage";
import { useEffect } from "react";
import { useAppSelector } from "../store";
export default function Signup() {
  const redirect = useNavigate();
  const { isLogin } = useAppSelector((state) => state.user);
  const handlerSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((user) => console.log(user.user))
      .catch((err) => console.log(err));
    redirect("/");
  };
  useEffect(() => {
    if (isLogin) {
      redirect("/");
    }
  }, [isLogin]);

  return (
    !isLogin && (
      <section>
        <form onSubmit={handlerSubmit}>
          <input name="email" type="email" placeholder="E-mail" required />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <GoToPage url="/login">Login</GoToPage>
      </section>
    )
  );
}
