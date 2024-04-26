import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase";
import GoToPage from "../components/GoToPage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store";
import ErrorFirebase from "../components/ErrorFirebase";
export default function Login() {
  const { isLogin } = useAppSelector((state) => state.user);
  const [errorLogin, setErrorLogin] = useState(null);
  const redirect = useNavigate();

  const handlerLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(appAuth, email, password)
      .then((payload) => {
        if (payload) redirect("/");
      })
      .catch((err) => {
        setErrorLogin({ ...err });
      });
  };
  useEffect(() => {
    if (isLogin) {
      redirect("/");
    }
  }, [isLogin]);
  return (
    <section className="flex flex-col gap-4 items-center justify-center min-h-[50vh]">
      <h2 className="font-title text-yellow-400">Login user</h2>

      <form
        onSubmit={handlerLogin}
        className="flex flex-col items-center justify-center w-[50vh] h-[25vh]  gap-4  py-4 px-8 relative"
      >
        <ErrorFirebase error={errorLogin} />

        <input
          className="p-2 rounded-md ring-1 ring-yellow-400 bg-black text-white  w-full"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <input
          className="p-2 rounded-md ring-1 ring-yellow-400 bg-black text-white  w-full"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="bg-green-200 rounded-md p-2  text-stone-800 w-full md:w-[50%]"
        >
          Login
        </button>
      </form>
      <GoToPage url="/signup">Sign Up</GoToPage>
    </section>
  );
}
