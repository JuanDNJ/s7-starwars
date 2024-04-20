import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getApi } from "../utils";

export default function Films() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [films, setFilms] = useState();
  const [renderFilms, renderSetFilms] = useState([]);

  const getFilms = async () => {
    const filmShip = await getApi("starships/" + id);
    setFilms(() => filmShip.films);
  };
  const getAllfilms = async () => {
    let arr = [];
    if (films) {
      for (let element of films) {
        const ob = await fetch(element);
        if (!ob.ok) throw new Error("Invalid");
        const jo = await ob.json();
        arr = [...arr, jo];
      }
      return arr;
    } else {
      return arr;
    }

    // const query = await fetch(films[0]);
    // const json = await query.json();
  };
  const render = async () => {
    const flms = await getAllfilms();
    renderSetFilms(() => flms);
  };

  useEffect(() => {
    getFilms();
    render();
  }, [id, films]);

  return (
    <div>
      <h1>
        {renderFilms &&
          renderFilms.map((payload, index) => (
            <div key={index}>
              <h2>{payload.title}</h2>
            </div>
          ))}
      </h1>
    </div>
  );
}
