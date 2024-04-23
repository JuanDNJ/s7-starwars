import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment, Suspense } from "react";
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
} from "./lazy";

import { useAppDispatch, useAppSelector } from "../store";
import { fetchGetStarShipsPage } from "../store/tunks";
import Header from "../layouts/Header";
import ProtectedRoutes from "./ProtectedRoutes";
// import Loading from "../components/Loading";

export default function AppRoutes() {
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => state.user);
  return (
    <Suspense fallback={<h1 style={{ color: "#333" }}>Loadding ...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Fragment>
                  <Header />
                </Fragment>
              </MainLayout>
            }
          >
            <Route index element={<LazyHome />} />
            <Route path="/home" element={<LazyHome />} />
            <Route element={<ProtectedRoutes canActivate={isLogin} />}>
              <Route
                path="/starships"
                element={<LazyShips />}
                loader={dispatch(fetchGetStarShipsPage(1))}
              />
              <Route path="/starships/detail" element={<LazyDetails />}>
                <Route path="pilots" element={<LazyPilots />}></Route>
                <Route path="films" element={<LazyFilms />}></Route>
                <Route path="*" element={<Lazy404 />} />
              </Route>
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
