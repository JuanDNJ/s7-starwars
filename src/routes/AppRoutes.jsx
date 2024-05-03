import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import {
  LazyHome,
  LazyShips,
  LazyDetails,
  LazyPilots,
  LazyFilms,
  Lazy404,
  LazySignup,
  LazyLogin,
  MainLayout,
  LazyFilm,
  LazyPilot,
  LazyFilmCharacter,
  LazyDetailFilmSpecie,
  LazyDetailFilmVehicle,
  LazyDetailFilmPlanet,
} from "./lazy";

import { useAppDispatch } from "../store";
import { fetchGetStarShipsPage } from "../store/tunks";
import Header from "../layouts/Header";
import ProtectedRoutes from "./ProtectedRoutes";
// import Loading from "../components/Loading";

export default function AppRoutes() {
  const dispatch = useAppDispatch();

  return (
    <Suspense fallback={<h1 style={{ color: "#333" }}>Loadding ...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Header />
              </MainLayout>
            }
            loader={dispatch(fetchGetStarShipsPage(1))}
          >
            <Route index element={<LazyHome />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/starships" element={<LazyShips />} />
              <Route index element={<LazyShips />} />
              <Route path="/starships/detail" element={<LazyDetails />}>
                <Route path="pilots" element={<LazyPilots />} />
                <Route path="films" element={<LazyFilms />} />
                <Route path="*" element={<Lazy404 />} />
              </Route>
              <Route path="/detail/film" element={<LazyFilm />} />
              <Route
                path="/detail/film/character"
                element={<LazyFilmCharacter />}
              />
              <Route path="/detail/pilot" element={<LazyPilot />} />
              <Route
                path="/detail/film/specie"
                element={<LazyDetailFilmSpecie />}
              />
              <Route
                path="/detail/film/vehicle"
                element={<LazyDetailFilmVehicle />}
              />
              <Route
                path="/detail/film/planet"
                element={<LazyDetailFilmPlanet />}
              />
            </Route>

            <Route path="/login" element={<LazyLogin />} />
            <Route path="/signup" element={<LazySignup />} />
            <Route path="*" element={<Lazy404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
