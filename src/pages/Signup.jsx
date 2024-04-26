import { createUserWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import GoToPage from "../components/GoToPage";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store";
import ErrorFirebase from "../components/ErrorFirebase";
import viewPasswordIcon from "../assets/images/svg/view_password.svg";
export default function Signup() {
  const redirect = useNavigate();
  const [viewPassword, setWiewPassword] = useState(false);
  const [errorAccount, setErrorAccount] = useState(null);
  const { isLogin } = useAppSelector((state) => state.user);
  const handlerSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((user) => {
        if (user) redirect("/");
      })
      .catch((err) => {
        setErrorAccount({ ...err });
      });
  };
  const handlerViewPassword = () => {
    setWiewPassword((prev) => !prev);
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
          className="flex flex-col items-center justify-center w-[50vh] h-[25vh]  gap-4  py-4 px-8 relative"
        >
          <ErrorFirebase error={errorAccount} />
          <input
            className="p-2 rounded-md ring-1 ring-yellow-400 bg-black text-white  w-full"
            name="email"
            type="email"
            required
            placeholder="E-mail"
          />
          <div className="w-full form-control">
            <label
              htmlFor="password"
              className="password pr-4 active:scale-50 duration-500"
              onClick={handlerViewPassword}
            >
              <img
                src={viewPasswordIcon}
                width={28}
                height={28}
                alt="View password"
              />
            </label>
            <input
              className="p-2 rounded-md ring-1 ring-yellow-400 bg-black text-white  w-full"
              name="password"
              type={`${(viewPassword && "text") || "password"}`}
              placeholder="Password"
              required
            />
          </div>
          <button
            className="bg-green-200 rounded-md p-2  text-stone-800 w-full md:w-[50%]"
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
