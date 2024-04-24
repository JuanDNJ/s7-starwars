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
      <section className="flex flex-col gap-4 items-center justify-center min-h-[50vh]">
        <h2 className="font-title text-yellow-400">Signup new user</h2>
        <form
          onSubmit={handlerSubmit}
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
            className="bg-green-200 rounded-md p-2 text-black"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <GoToPage url="/login">Login</GoToPage>
      </section>
    )
  );
}
