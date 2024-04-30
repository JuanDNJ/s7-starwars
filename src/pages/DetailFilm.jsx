import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCharcatersByFilm, getFilm, getSpeciesByFilm } from "../utils";
import GridList from "../components/GridList";
export default function DetailFilm() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [film, setFilm] = useState(null);
  const [characterFilm, setCharacterFilm] = useState([]);
  const [speciesFilm, setSpeciesFilm] = useState([]);
  useEffect(() => {
    getFilm(id, (film) => {
      setFilm(() => film);
    });
    getCharcatersByFilm(id, (characters) => {
      setCharacterFilm(() => characters);
    });
    getSpeciesByFilm(id, (species) => {
      setSpeciesFilm(() => species);
    });
  }, [id]);

  return (
    film && (
      <section className="flex flex-col gap-4 p-4 ">
        <section className="grid grid-cols-6 gap-4">
          <article className="col-span-4 md:col-span-2 flex justify-center">
            <img src={film.picture} alt="" className="w-full" />
          </article>
          <article className="col-span-4 md:col-span-4 flex flex-col p-4 gap-2">
            <h2 className="font-title text-yellow-200 text-xl">{film.title}</h2>
            Episoded {film.episode_id}
            <div className="flex flex-col">
              <div>
                <strong className="text-blue-300">Director: </strong>
                <small>{film.director}</small>
              </div>
              <div>
                <strong className="text-blue-300">Produced:</strong>
                <small> {film.director}</small>
              </div>
              <div>
                <strong className="text-blue-300">Date realase: </strong>
                <small>{film.release_date}</small>
              </div>
              <p className="py-4">{film.opening_crawl}</p>
            </div>
          </article>
        </section>
        <article className="grid grid-cols-2 gap-2">
          <div className={`grid overflow-hidden h-56`}>
            <h3 className="">Characters {characterFilm.length} </h3>
            <GridList list={characterFilm} cols={3} typePicture="characters" />
          </div>
          <div className={`grid overflow-hidden h-56`}>
            <h3 className="">Species {speciesFilm.length} </h3>
            <GridList list={speciesFilm} cols={3} typePicture="species" />
          </div>
          <div className=" bg-orange-500">
            <small>StarShips: {film.starships.length}</small>
          </div>
          <div className=" bg-pink-500">
            <small>StarShips: {film.planets.length}</small>
          </div>
        </article>
      </section>
    )
  );
}
