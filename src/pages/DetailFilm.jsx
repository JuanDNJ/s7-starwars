import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPictureByUrl } from "../utils";
export default function DetailFilm() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [film, setFilm] = useState(null);
  const getFilm = async () => {
    const film = await fetch(`https://swapi.py4e.com/api/films/${id}`);
    const result = await film.json();
    setFilm({ ...result, picture: getPictureByUrl(result.url, "film") });
  };
  useEffect(() => {
    getFilm();
  }, [id]);
  return (
    film && (
      <section className="flex flex-col gap-4 py-4 items-center">
        <img width={512} src={film.picture} alt="" />
        <article className="flex flex-col p-4 gap-2">
          <h2>
            {film.title} episoded {film.episode_id}
          </h2>
          <strong>Director: {film.director}</strong>
          <strong>Produced: {film.director}</strong>
          <strong>Date realase: {film.release_date}</strong>
          <p>{film.opening_crawl}</p>
          <small>Characters: {film.characters.length}</small>
          <small>Species: {film.species.length}</small>
          <small>StarShips: {film.starships.length}</small>
        </article>
      </section>
    )
  );
}
