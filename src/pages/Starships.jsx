import { useEffect, useState } from "react";
import { getApi } from "../utils";
import List from "../components/List";
import Ship from "../components/Ship";
export default function Starships() {
  const [starships, setStarships] = useState({});
  useEffect(() => {
    getApi("starships")
      .then((ships) => {
        setStarships(() => ships);
      })
      .catch((error) => console.error(error));

    console.log(starships);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <article className="flex flex-col py-2">
      <aside className="border border-l-0 border-r-0 border-stone-800">
        <strong className="px-4 text-stone-400">StarShips</strong>
      </aside>
      <List payload={starships.results} Component={() => Ship} />
    </article>
  );
}
