import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import starShipsReduces from "./slices/starships";
import starShipReduces from "./slices/ship";
import userReducer from "./slices/user";

const useAppSelector = useSelector;
const useAppDispatch = useDispatch;

const store = configureStore({
  reducer: {
    starShips: starShipsReduces,
    starShip: starShipReduces,
    user: userReducer,
  },
});

export { useAppSelector, useAppDispatch };
export default store;
