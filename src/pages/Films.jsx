import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getShip } from "../utils";
import CardFilm from "../components/CardFilm";

export default function Films() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [films, setFilms] = useState();

  useEffect(() => {
    getShip(id, "films", (rec) => {
      setFilms(() => rec);
    });
  }, [id]);

  return (
    <div className="grid__films">
      {films &&
        films.map((payload, index) => <CardFilm key={index} film={payload} />)}
    </div>
  );
}
