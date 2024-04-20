import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Starships from "./pages/Starships";
import Menu from "./components/Menu";
import Page404 from "./pages/Page404";
import Deatils from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GoToPage from "./components/GoToPage";
import Logo from "./components/Logo";
import MainHeader from "./components/MainHeader";
import Pilots from "./pages/Pilots";
import Films from "./pages/Films";
import { useAppDispatch } from "./store";
import { fetchStarships } from "./store/tunks";
import { useEffect } from "react";
export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStarships());
  }, []);
  return (
    <BrowserRouter>
      <section className="max-w-5xl m-auto">
        <article className="h-screen flex flex-col gap-2">
          <MainHeader>
            <Menu>
              <section className="col-span-8 md:col-span-6 flex gap-2">
                <GoToPage
                  _blank
                  icon
                  url={"https://www.facebook.com/starwars.es"}
                >
                  f
                </GoToPage>

                <GoToPage _blank icon url="https://www.instagram.com/starwars/">
                  i
                </GoToPage>
                <GoToPage _blank icon url="https://twitter.com/starwars">
                  X
                </GoToPage>
                <GoToPage _blank icon url="https://www.youtube.com/@StarWars">
                  YT
                </GoToPage>
              </section>
              <section className="col-span-4 md:col-span-6 flex justify-end gap-4">
                <GoToPage url="/login">Login</GoToPage>
                <GoToPage url="/signup">signup</GoToPage>
              </section>
            </Menu>
            <Logo title=" Star Wars" />
            <Menu border="border border-stone-800 border-l-0 border-r-0">
              <section className="col-span-12 flex justify-center gap-4">
                <GoToPage url="/">Home</GoToPage>
                <GoToPage url="/starships">StarShips</GoToPage>
              </section>
            </Menu>
          </MainHeader>

          <section className="flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/starships/detail" element={<Deatils />}>
                <Route path="pilots" element={<Pilots />}></Route>
                <Route path="films" element={<Films />}></Route>
                <Route path="*" element={<Page404 />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </section>
        </article>
      </section>
    </BrowserRouter>
  );
}
