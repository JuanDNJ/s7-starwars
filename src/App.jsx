import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Starships from "./pages/Starships";
import Menu from "./components/Menu";
import Page404 from "./pages/Page404";
import Deatils from "./components/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <section className="max-w-5xl m-auto">
        <article className="h-screen flex flex-col gap-2">
          <Menu>
            <section className="col-span-8 md:col-span-6 flex gap-2">
              <Link
                target="_blank"
                className="flex justify-center items-center text-blue-400 text-[16px] font-extrabold rounded-full border border-stone-800 h-8 w-8 hover:border-stone-400"
                to="https://www.facebook.com/starwars.es"
              >
                f
              </Link>
              <Link
                target="_blank"
                className="flex justify-center items-center text-violet-400 font-extrabold rounded-full border border-stone-800 h-8 w-8 hover:border-stone-400"
                to="https://www.instagram.com/starwars/"
              >
                i
              </Link>
              <Link
                target="_blank"
                className="flex justify-center items-center text-[16px] font-extrabold rounded-full border border-stone-800 h-8 w-8 hover:border-stone-400"
                to="https://twitter.com/starwars"
              >
                X
              </Link>
              <Link
                target="_blank"
                className="flex justify-center items-center text-red-500 text-[14px] font-extrabold rounded-full border border-stone-800 h-8 w-8 hover:border-stone-400"
                to="https://www.youtube.com/@StarWars"
              >
                YT
              </Link>
            </section>
            <section className="col-span-4 md:col-span-6 flex justify-end gap-4">
              <Link
                className="text-sm font-bold border-b-[1px] pb-1 border-b-transparent hover:border-b-stone-500 hover:text-yellow-400"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="text-sm font-bold border-b-[1px] pb-1 border-b-transparent hover:border-b-stone-500 hover:text-yellow-400"
                to="/signup"
              >
                Signup
              </Link>
            </section>
          </Menu>
          <header>
            <h1 className="text-yellow-400 text-6xl font-bold text-center">
              Star Wars
            </h1>
          </header>
          <Menu border="border border-stone-800 border-l-0 border-r-0">
            <section className="col-span-12 flex justify-center gap-4">
              <Link
                className="text-sm font-bold border-b-[1px] pb-1 border-b-transparent hover:border-b-stone-500 hover:text-yellow-400"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-sm font-bold border-b-[1px] pb-1 border-b-transparent hover:border-b-stone-500 hover:text-yellow-400"
                to="/starships"
              >
                StarShips
              </Link>
            </section>
          </Menu>
          <section className="flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/starships/detail/:id" element={<Deatils />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </section>
        </article>
      </section>
    </BrowserRouter>
  );
}
