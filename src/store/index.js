import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import shipsSliceReduce from "./slices/ships";
import errorSliceReduce from "./slices/error";
import userSliceReduce from "./slices/user";
import shipSliceReduce from "./slices/ship";

const useAppSelector = useSelector;
const useAppDispatch = useDispatch;

const store = configureStore({
  reducer: {
    starShips: shipsSliceReduce,
    starShip: shipSliceReduce,
    user: userSliceReduce,
    error: errorSliceReduce,
  },
});

export { useAppSelector, useAppDispatch };
export default store;
