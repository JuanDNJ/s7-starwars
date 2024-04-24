import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase";
import GoToPage from "../components/GoToPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../store";
export default function Login() {
  const { isLogin } = useAppSelector((state) => state.user);
  const redirect = useNavigate();

  const handlerLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(appAuth, email, password)
      .then((payload) => {
        if (payload) redirect("/");
      })
      .catch((err) => console.log(err));
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
        className="flex flex-col justify-center w-[50vh] h-[25vh] text-white gap-4  py-4 px-8"
      >
        <input
          className="p-2 rounded-md ring-1 ring-yellow-400 text-black"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <input
          className="p-2 rounded-md ring-1 ring-yellow-400 text-black"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="bg-green-200 rounded-md p-2 text-black"
        >
          Login
        </button>
      </form>
      <GoToPage url="/signup">Sign Up</GoToPage>
    </section>
  );
}
