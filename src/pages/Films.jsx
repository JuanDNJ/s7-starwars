import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getShip } from "../utils";
import CardFilm from "../components/CardFilm";

export default function Films() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [films, setFilms] = useState();
  const [renderFilms, setRenderFilms] = useState([]);

  const getAllFilms = async () => {
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
  };
  const render = async () => {
    const flms = await getAllFilms();
    setRenderFilms(() => flms);
  };

  useEffect(() => {
    getShip(id, "films", setFilms);
    render();
  }, [id, films]);

  return (
    <div className="grid__films">
      {renderFilms &&
        renderFilms.map((payload, index) => (
          <CardFilm key={index} film={payload} />
        ))}
    </div>
  );
}
