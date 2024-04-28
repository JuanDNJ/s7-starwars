import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase";
import GoToPage from "../components/GoToPage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store";
import ErrorFirebase from "../components/ErrorFirebase";
import viewPasswordIcon from "../assets/images/svg/view.svg";
import { setErrorCode } from "../store/slices/error";
export default function Login() {
  const { isLogin } = useAppSelector((state) => state.user);
  const [viewPassword, setWiewPassword] = useState(null);

  const dispatch = useAppDispatch();
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
        dispatch(setErrorCode(err.code));
      });
  };

  const handlerViewPassword = () => {
    setWiewPassword((prev) => !prev);
  };

  useEffect(() => {
    if (isLogin) {
      redirect("/");
    }
    dispatch(setErrorCode(null));
  }, [isLogin]);
  return (
    !isLogin && (
      <section className="flex items-center justify-center min-h-[60vh] md:min-h-[512px]">
        <article className="flex flex-col items-center gap-4">
          <h2 className="font-title text-yellow-200 ">
            Enter your user information
          </h2>

          <form
            name="login"
            id="form__login"
            onSubmit={handlerLogin}
            className="flex flex-col items-center justify-center w-[320px] md:max-w-[320px] h-[25vh] gap-4 py-4 px-8 relative"
          >
            <ErrorFirebase />
            <input
              className="p-2 rounded-md ring-1 ring-yellow-200 bg-black text-white w-full"
              name="email"
              type="email"
              placeholder="E-mail"
              required
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
                className="p-2 rounded-md ring-1 ring-yellow-200 bg-black text-white  w-full"
                name="password"
                id="password"
                type={`${(viewPassword && "text") || "password"}`}
                placeholder="Password"
                required
              />
            </div>

            <div className="flex gap-4 w-full mt-4">
              <button
                type="submit"
                className="bg-green-500 rounded-md p-2 text-stone-50 flex-1 hover:bg-green-800"
              >
                Login
              </button>
              <button
                type="reset"
                className="bg-red-500 rounded-md p-2 text-stone-50 flex-1 hover:bg-red-800"
              >
                Reset
              </button>
            </div>
          </form>
          <GoToPage url="/signup"> You do not have an account?</GoToPage>
        </article>
      </section>
    )
  );
}
