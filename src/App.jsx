import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Starships from "./pages/Starships";
import Page404 from "./pages/Page404";
import Deatils from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pilots from "./pages/Pilots";
import Films from "./pages/Films";

export default function App() {
  return (
    <BrowserRouter>
      <section className="max-w-5xl m-auto">
        <article className="h-screen flex flex-col gap-2">
          <section className="flex flex-col">
            <Header />
            <section className="z-0">
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
          </section>
        </article>
      </section>
    </BrowserRouter>
  );
}
