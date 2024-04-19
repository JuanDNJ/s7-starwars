import { useEffect, useState } from "react";
import { getApi } from "./utils";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Starships from "./pages/Starships";
import Menu from "./components/Menu";
export default function App() {
  const [starships, setStarships] = useState({});
  useEffect(() => {
    getApi("starships")
      .then((ships) => {
        setStarships(() => ships);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <BrowserRouter>
      <section className="max-w-5xl m-auto">
        <article className="h-screen flex flex-col">
          <Menu justify="between">
            <section className="flex gap-4">
              <Link target="_blank" to="https://www.facebook.com/starwars.es">
                f
              </Link>
              <Link target="_blank" to="https://www.instagram.com/starwars/">
                I
              </Link>
              <Link target="_blank" to="https://twitter.com/starwars">
                X
              </Link>
              <Link target="_blank" to="https://www.youtube.com/@StarWars">
                yt
              </Link>
            </section>
            <section className="flex gap-4">
              <Link to="/">Login</Link>
              <Link to="/starships">Signup</Link>
            </section>
          </Menu>
          <header>
            <h1 className="text-6xl font-bold text-center">Star Wars</h1>
          </header>
          <Menu justify="center">
            <Link to="/">Home</Link>
            <Link to="/starships">StarShips</Link>
          </Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starships" element={<Starships />} />
            <Route
              path="*"
              element={
                <h1 className="h-96 flex items-center justify-center text-7xl text-red-400">
                  Error 404
                </h1>
              }
            />
          </Routes>
        </article>
      </section>
    </BrowserRouter>
  );
}
