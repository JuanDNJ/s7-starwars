import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase";

export default function Login() {
  const handlerLogin = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    signInWithEmailAndPassword(appAuth, data.email, data.password)
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => console.log(err));
  };

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
        />
        <input
          className="p-2 rounded-md"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit" className=" bg-green-200 rounded-md p-2 ">
          Login
        </button>
      </form>
    </section>
  );
}
