import { useEffect, useState } from "react";
import { getApi } from "./utils";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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
            <Route
              path="/"
              element={
                <article className="p-4">
                  <h1>Home</h1>
                  <p>
                    Ut laboris esse ea culpa. Ex officia est pariatur elit
                    mollit proident sint reprehenderit fugiat est consequat.
                    Nisi dolore eu ex laboris et ullamco commodo ullamco minim
                    esse adipisicing ipsum. Proident nulla qui elit eiusmod
                    mollit nisi in aliquip mollit exercitation officia ea. Culpa
                    qui excepteur dolor dolor Lorem in cillum proident
                    consectetur dolore in. Laborum esse veniam tempor quis enim
                    non veniam do laborum in. Cillum labore excepteur nostrud
                    mollit. Culpa deserunt proident do ex ipsum aliquip.
                    Deserunt est esse minim ea nulla. Enim nostrud ad aliqua
                    commodo adipisicing duis veniam excepteur laboris ut magna
                    ipsum. Aliquip consequat veniam qui proident id minim
                    cupidatat enim. Officia labore culpa sunt irure velit
                    voluptate adipisicing eu. Adipisicing sit dolor qui mollit.
                  </p>
                </article>
              }
            />
            <Route
              path="/starships"
              element={
                <section className="list__ships p-4">
                  <aside className="col-span-full p-4">
                    <strong>StarShips</strong>
                  </aside>
                  {starships.results &&
                    starships.results.map((star, idx) => (
                      <article
                        className="ring-2 rounded-lg min-w-80 p-4"
                        key={idx}
                      >
                        <h2 className="text-2xl">{star.name}</h2>
                        <span className="text-sm">{star.model}</span>
                      </article>
                    ))}
                </section>
              }
            />
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
