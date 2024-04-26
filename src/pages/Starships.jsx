import List from "../components/List";
import Aside from "../components/Aside";
import { useAppDispatch, useAppSelector } from "../store";
import Loading from "../components/Loading";

import { fetchGetStarShipsPage } from "../store/tunks";
import { STAR_WARS } from "../utils";

export default function Starships() {
  const shipsAll = useAppSelector((state) => state.starShips);

  const { isLoading, data } = shipsAll;

  const dispatch = useAppDispatch();

  const handlerNextPage = () => {
    const next =
      shipsAll.ships.next &&
      shipsAll.ships.next.replace(STAR_WARS + "starships/?page=", "");
    dispatch(fetchGetStarShipsPage(next));
  };

  return (
    <article className="py-2">
      {isLoading && <Loading />}
      {data && (
        <>
          <article className="flex flex-col">
            <Aside>StarShips {data.length}</Aside>
            <List payload={data} />
          </article>
          <footer className="flex justify-end p-4">
            <button
              onClick={handlerNextPage}
              className="text-yellow-400 hover:text-yellow-600"
            >
              View more
            </button>
          </footer>
        </>
      )}
    </article>
  );
}
