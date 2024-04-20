import { useEffect, useState } from "react";
import { getApi } from "../utils";
import List from "../components/List";
import Aside from "../components/Aside";

export default function Starships() {
  const [starships, setStarships] = useState({});
  useEffect(() => {
    getApi("starships")
      .then((ships) => {
        console.log(ships);
        setStarships(() => ships);
      })
      .catch((error) => console.error(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <article className="flex flex-col py-2">
      <Aside>StarShips</Aside>
      <List payload={starships.results} />
    </article>
  );
}
