import List from "../components/List";
import Aside from "../components/Aside";
import { useAppSelector } from "../store";
import Loading from "../components/Loading";

export default function Starships() {
  const shipsAll = useAppSelector((state) => state.starShips);

  const { isLoading, error, ships } = shipsAll;

  return (
    <>
      {isLoading && <Loading />}
      {error && <h1>Error</h1>}
      {ships && (
        <article className="flex flex-col py-2">
          <Aside>StarShips</Aside>
          <List payload={ships.results} />
        </article>
      )}
    </>
  );
}
