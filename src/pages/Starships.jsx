import List from "../components/List";
import Aside from "../components/Aside";
import { useAppDispatch, useAppSelector } from "../store";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
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
        <article className="flex flex-col">
          <Aside>StarShips {data.length}</Aside>
          <InfiniteScroll
            dataLength={data.length}
            next={handlerNextPage}
            hasMore={data.length === shipsAll.ships.count ? false : true}
            loader={<Loading />}
          >
            <List payload={data} />
          </InfiniteScroll>
        </article>
      )}
    </article>
  );
}
