import List from "../components/List";
import Aside from "../components/Aside";
import { useAppDispatch, useAppSelector } from "../store";
import Loading from "../components/Loading";

import { fetchGetStarShipsPage } from "../store/tunks";
import { STAR_WARS } from "../utils";

export default function Starships() {
  const shipsAll = useAppSelector((state) => state.starShips);

  const { isLoading, error, data } = shipsAll;

  const dispatch = useAppDispatch();

  const handlerNextPage = () => {
    const next = shipsAll.ships.next.replace(
      STAR_WARS + "starships/?page=",
      ""
    );
    dispatch(fetchGetStarShipsPage(next));
  };

  return (
    <article>
      {isLoading && <Loading />}
      {error && <h1>Error</h1>}
      {data && (
        <article className="flex flex-col py-2">
          <Aside>StarShips {data.length}</Aside>
          <List payload={data} />
        </article>
      )}
      <footer>
        <button onClick={handlerNextPage}>view more</button>
      </footer>
    </article>
  );
}
