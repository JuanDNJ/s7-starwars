import List from "../components/List";
import Aside from "../components/Aside";
import { useAppDispatch, useAppSelector } from "../store";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { fetchStarships } from "../store/tunks";

export default function Starships() {
  const shipsAll = useAppSelector((state) => state.starShips);

  const { isLoading, error, ships } = shipsAll;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStarships());
  }, []);
  return (
    <article>
      {isLoading && <Loading />}
      {error && <h1>Error</h1>}
      {ships && (
        <article className="flex flex-col py-2">
          <Aside>StarShips</Aside>
          <List payload={ships.results} />
        </article>
      )}
    </article>
  );
}
