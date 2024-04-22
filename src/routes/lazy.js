import { lazy } from "react";
const MainLayout = lazy(() => import("../layouts/MainLayout.jsx"));

const LazyHome = lazy(() => import("../pages/Home.jsx"));
const LazyShips = lazy(() => import("../pages/Starships.jsx"));
const Lazy404 = lazy(() => import("../pages/Page404.jsx"));
const LazyDeatils = lazy(() => import("../pages/Details.jsx"));
const LazyLogin = lazy(() => import("../pages/Login.jsx"));
const LazySignup = lazy(() => import("../pages/Signup.jsx"));
const LazyPilots = lazy(() => import("../pages/Pilots.jsx"));
const LazyFilms = lazy(() => import("../pages/Films.jsx"));
export {
  MainLayout,
  LazyHome,
  LazyShips,
  Lazy404,
  LazyDeatils,
  LazyLogin,
  LazySignup,
  LazyPilots,
  LazyFilms,
};
