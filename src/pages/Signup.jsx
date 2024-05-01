import { createUserWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { GoToPage, ErrorFirebase } from "../components";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import viewPasswordIcon from "../assets/images/svg/view_password.svg";
import { setErrorCode } from "../store/slices/error";
export default function Signup() {
  const redirect = useNavigate();
  const [viewPassword, setWiewPassword] = useState(false);

  const dispatch = useAppDispatch();
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
      <section className="flex flex-col gap-4 items-center justify-center min-h-[60vh] md:min-h-[512px]">
        <article className="flex flex-col items-center gap-4">
          <h2 className="font-title text-yellow-200 ">Create new account</h2>
          <form
            onSubmit={handlerSubmit}
            className="flex flex-col items-center justify-center w-[320px] md:max-w-[320px] h-[25vh] gap-4 py-4 px-8 relative"
          >
            <ErrorFirebase />
            <input
              className="p-2 rounded-md ring-1 ring-yellow-200 bg-black text-white  w-full"
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
                className="p-2 rounded-md ring-1 ring-yellow-200 bg-black text-white  w-full"
                name="password"
                type={`${(viewPassword && "text") || "password"}`}
                placeholder="Password"
                required
              />
            </div>
            <div className="flex gap-4 mt-4 w-full">
              <button
                className="bg-green-500 rounded-md p-2 text-stone-50 flex-1 hover:bg-green-800"
                type="submit"
              >
                Sign Up
              </button>
              <button
                className="bg-red-500 rounded-md p-2 text-stone-50 flex-1 hover:bg-red-800"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
          <GoToPage url="/login">You have an account?</GoToPage>
        </article>
      </section>
    )
  );
}
