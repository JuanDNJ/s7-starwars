import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getResourceByFilm, getFilm } from "../utils";
import GridList from "../components/GridList";
import viewIcon from "../assets/images/svg/view.svg";

export default function DetailFilm() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [film, setFilm] = useState(null);
  const [characterFilm, setCharacterFilm] = useState([]);
  const [speciesFilm, setSpeciesFilm] = useState([]);
  const [planetsFilm, setPlanetsFilm] = useState([]);
  const [vehiclesFilm, setVehiclesFilm] = useState([]);
  const [starshipsFilm, setStarshipsFilm] = useState([]);
  const [view, setView] = useState({
    SPECIES: false,
    CHARACTERS: false,
    PLANETS: false,
    VEHICLES: false,
    STARSHIPS: false,
  });
  const handlerView = (resource) => {
    switch (resource) {
      case "characters":
        setView((prev) => {
          return {
            ...prev,
            CHARACTERS: !prev.CHARACTERS,
          };
        });
        break;
      case "species":
        setView((prev) => {
          return {
            ...prev,
            SPECIES: !prev.SPECIES,
          };
        });
        break;
      case "vehicles":
        setView((prev) => {
          return {
            ...prev,
            VEHICLES: !prev.VEHICLES,
          };
        });
        break;
      case "starships":
        setView((prev) => {
          return {
            ...prev,
            STARSHIPS: !prev.STARSHIPS,
          };
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    getFilm(id, (film) => {
      setFilm(() => film);
    });
    // TODO: Refactorizar esta sección
    getResourceByFilm(id, "starships", (starships) => {
      setStarshipsFilm(() => starships);
    });
    getResourceByFilm(id, "characters", (characters) => {
      setCharacterFilm(() => characters);
    });
    getResourceByFilm(id, "species", (species) => {
      setSpeciesFilm(() => species);
    });
    getResourceByFilm(id, "planets", (planets) => {
      setPlanetsFilm(() => planets);
    });
    getResourceByFilm(id, "vehicles", (vehicles) => {
      setVehiclesFilm(() => vehicles);
    });
    // TODO:
    console.log(film);
  }, [id]);

  return (
    film && (
      <section className="flex flex-col gap-4 p-4 ">
        <section className="grid grid-cols-6 gap-4">
          <article className="col-span-6 md:col-span-2 flex justify-center">
            <img src={film.picture} alt="Picture by film" />
          </article>
          <article className="col-span-6 md:col-span-4 flex flex-col p-4 gap-2">
            <h2 className="font-title text-yellow-200 text-xl">{film.title}</h2>
            <span> Episoded {film.episode_id}</span>
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
            <aside className="col-span-4">
              <button
                className="inline-flex items-center justify-center p-2 gap-2"
                onClick={() => handlerView("characters")}
              >
                <strong>Characters</strong>{" "}
                <img src={viewIcon} alt="View Icon" />
              </button>
              <button
                className="inline-flex items-center justify-center p-2 gap-2"
                onClick={() => handlerView("species")}
              >
                <strong>Species</strong> <img src={viewIcon} alt="View Icon" />
              </button>
              <button
                className="inline-flex items-center justify-center p-2 gap-2"
                onClick={() => handlerView("vehicles")}
              >
                <strong>Vehicles</strong> <img src={viewIcon} alt="View Icon" />
              </button>
              <button
                className="inline-flex items-center justify-center p-2 gap-2"
                onClick={() => handlerView("starships")}
              >
                <strong>StarShips</strong>{" "}
                <img src={viewIcon} alt="View Icon" />
              </button>
            </aside>
          </article>
        </section>
        <article className="grid md:grid-cols-2 gap-2">
          {view.CHARACTERS && (
            <div className={`flex flex-col overflow-hidden h-72 md:h-56`}>
              <h3 className="flex gap-4 py-4">
                <strong>Characters {characterFilm.length} </strong>
              </h3>

              <GridList
                list={characterFilm}
                cols="grid-cols-2 md:grid-cols-4"
                typePicture="characters"
              />
            </div>
          )}
          {view.SPECIES && (
            <div className={`flex flex-col overflow-hidden h-72 md:h-56`}>
              <h3 className="flex gap-4 py-4">
                <strong>Species {speciesFilm.length} </strong>
              </h3>
              <GridList
                list={speciesFilm}
                cols="grid-cols-2 md:grid-cols-4"
                typePicture="species"
              />
            </div>
          )}
          {view.STARSHIPS && (
            <div className=" bg-orange-500">
              <small>StarShips: {film.starships.length}</small>
            </div>
          )}
          {view.VEHICLES && (
            <div className=" bg-pink-500">
              <small>StarShips: {film.planets.length}</small>
            </div>
          )}
        </article>
      </section>
    )
  );
}
