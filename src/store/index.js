import { configureStore } from "@reduxjs/toolkit";
import starShipsReduces from "./slices/starships";
import { useSelector, useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    starShips: starShipsReduces,
  },
});

export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;
export default store;
