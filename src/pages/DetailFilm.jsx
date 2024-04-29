import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VISUAL_GUIDE_URL, getIdByUrl, getPictureByUrl } from "../utils";
export default function DetailFilm() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [film, setFilm] = useState(null);

  const [characterFilm, setCharacterFilm] = useState([]);

  const getFilm = async () => {
    const film = await fetch(`https://swapi.py4e.com/api/films/${id}`);
    const result = await film.json();
    setFilm({ ...result, picture: getPictureByUrl(result.url, "film") });
    console.log(film);
  };
  const pruebaGetPeopleFilm = async (url) => {
    const peoples = film && film.characters;

    let temporalPeoples = [];
    for (let i = 0; i < peoples.length; i++) {
      const request = await fetch(peoples[i]);
      const result = await request.json();
      console.log(result);
      temporalPeoples = [...temporalPeoples, result];
    }
    setCharacterFilm(() => temporalPeoples);
    // const request = await fetch(peoples[i]);
    // const result = await request.json();
    // console.log(temporalPeoples);
    console.log(characterFilm);
  };

  useEffect(() => {
    getFilm();
    pruebaGetPeopleFilm();
    // console.log(film);
  }, [id]);

  return (
    film && (
      <section className="flex flex-col gap-4 p-4 ">
        <section className="flex-1 flex ">
          <article className="flex-1">
            <img width={512} src={film.picture} alt="" />
          </article>
          <article className="flex-1 flex flex-col p-4 gap-2">
            <h2 className="font-title text-yellow-200 text-xl">
              {film.title} episoded {film.episode_id}
            </h2>
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
        <article className="flex flex-col">
          <h3 className="w-full">Characters {characterFilm.length} </h3>
          <div className="flex-1 grid grid-cols-12 gap-2 py-4">
            {characterFilm.map((people, inx) => (
              <div
                key={inx}
                className="bg-stone-800 text-teal-200 border border-yellow-200"
              >
                <img
                  className="filmCharacterImg"
                  src={
                    VISUAL_GUIDE_URL +
                    "/characters/" +
                    getIdByUrl(people.url) +
                    ".jpg"
                  }
                  alt=""
                />
              </div>
            ))}
            <small>Characters: {film.characters.length}</small>
          </div>
          <div className="flex-1 bg-green-500">
            <small>Species: {film.species.length}</small>
          </div>
          <div className="flex-1 bg-orange-500">
            <small>StarShips: {film.starships.length}</small>
          </div>
          <div className="flex-1 bg-pink-500">
            <small>StarShips: {film.planets.length}</small>
          </div>
        </article>
      </section>
    )
  );
}
