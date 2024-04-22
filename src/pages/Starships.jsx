import List from "../components/List";
import Aside from "../components/Aside";
import { useAppDispatch, useAppSelector } from "../store";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { fetchGetStarShipsPage, fetchStarships } from "../store/tunks";
import { STAR_WARS } from "../utils";

export default function Starships() {
  const shipsAll = useAppSelector((state) => state.starShips);

  const { isLoading, error, ships } = shipsAll;
  const dispatch = useAppDispatch();
  const handlerNextPage = () => {
    console.log(shipsAll.ships.next);
    const next = shipsAll.ships.next.replace(
      STAR_WARS + "starships/?page=",
      ""
    );
    dispatch(fetchGetStarShipsPage(next));
    console.log(shipsAll);
  };

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
      <footer>
        <button onClick={handlerNextPage}>Add more ships</button>
      </footer>
    </article>
  );
}
