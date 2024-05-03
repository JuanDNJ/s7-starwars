import { List, Aside, Loading } from "../components";
import { useAppDispatch, useAppSelector } from "../store";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchGetStarShipsPage } from "../store/tunks";
import { STAR_WARS } from "../config";

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
    <article className="py-2 bg-[rgba(0,0,0,.5)]">
      {isLoading && <Loading />}
      {data && (
        <article className="flex flex-col py-8 gap-8">
          <Aside text="text-stone-400 text-xl" align="justify-start">
            <div className="pl-4 flex items-baseline gap-2">
              <strong>StarShips</strong>
              <span className="text-yellow-400 text-sm">{data.length}</span>
            </div>
          </Aside>
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
