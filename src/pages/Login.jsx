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
      <h2>Login user</h2>
      <form
        onSubmit={handlerLogin}
        className="flex flex-col justify-center w-[33vh] h-[25vh] text-black gap-4 bg-stone-900 py-4 px-8"
      >
        <input
          className="p-2 rounded-md ring-1 ring-yellow-400"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="p-2 rounded-md"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit" className=" bg-green-200 rounded-md p-2 ">
          Login
        </button>
      </form>
      <GoToPage url="/signup">Sign Up</GoToPage>
    </section>
  );
}
