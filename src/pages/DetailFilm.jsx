import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getResourceByFilm, getFilm } from "../utils";
import { Aside, GridList } from "../components";
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
      case "planets":
        setView((prev) => {
          return {
            ...prev,
            PLANETS: !prev.PLANETS,
          };
        });
        break;
    }
  };

  const callResourcesFilm = () => {
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
  };

  useEffect(() => {
    getFilm(id, (film) => {
      setFilm(() => film);
    });
    callResourcesFilm();
  }, [id]);

  return (
    film && (
      <section className="flex flex-col gap-4 p-4 ">
        <Aside>
          <button
            className={`group inline-flex items-center justify-center p-2 gap-2 hover:text-yellow-300 ${
              characterFilm.length > 0 && view.CHARACTERS && "text-yellow-300"
            }`}
            onClick={() => handlerView("characters")}
          >
            <strong>Characters</strong>{" "}
            <img
              src={viewIcon}
              className="group-hover:scale-75"
              alt="View Icon"
            />
          </button>
          <button
            className={`group inline-flex items-center justify-center p-2 gap-2 hover:text-yellow-300 ${
              speciesFilm.length > 0 && view.SPECIES && "text-yellow-300"
            }`}
            onClick={() => handlerView("species")}
          >
            <strong>Species</strong>{" "}
            <img
              src={viewIcon}
              className="group-hover:scale-75"
              alt="View Icon"
            />
          </button>
          <button
            className={`group inline-flex items-center justify-center p-2 gap-2 hover:text-yellow-300 ${
              vehiclesFilm.length > 0 && view.VEHICLES && "text-yellow-300"
            }`}
            onClick={() => handlerView("vehicles")}
          >
            <strong>Vehicles</strong>{" "}
            <img
              src={viewIcon}
              className="group-hover:scale-75"
              alt="View Icon"
            />
          </button>
          <button
            className={`group inline-flex items-center justify-center p-2 gap-2 hover:text-yellow-300 ${
              starshipsFilm.length > 0 && view.STARSHIPS && "text-yellow-300"
            }`}
            onClick={() => handlerView("starships")}
          >
            <strong>StarShips</strong>{" "}
            <img
              src={viewIcon}
              className="group-hover:scale-75"
              alt="View Icon"
            />
          </button>
          <button
            className={`group inline-flex items-center justify-center p-2 gap-2 hover:text-yellow-300 ${
              planetsFilm.length > 0 && view.PLANETS && "text-yellow-300"
            }`}
            onClick={() => handlerView("planets")}
          >
            <strong>Planets</strong>{" "}
            <img
              src={viewIcon}
              className="group-hover:scale-75"
              alt="View Icon"
            />
          </button>
        </Aside>
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
          </article>
        </section>
        <article className="grid md:grid-cols-2 gap-2">
          {characterFilm.length > 0 && view.CHARACTERS && (
            <div className={`flex flex-col overflow-hidden h-[286px]`}>
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>Characters {characterFilm.length} </strong>
              </h3>

              <GridList
                list={characterFilm}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="characters"
              />
            </div>
          )}
          {speciesFilm.length > 0 && view.SPECIES && (
            <div
              id="species"
              className={`flex flex-col overflow-hidden h-[286px]`}
            >
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>Species {speciesFilm.length} </strong>
              </h3>
              <GridList
                list={speciesFilm}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="species"
              />
            </div>
          )}
          {starshipsFilm.length > 0 && view.STARSHIPS && (
            <div className="flex flex-col overflow-hidden h-[286px]">
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>StarShips {starshipsFilm.length} </strong>
              </h3>
              <GridList
                list={starshipsFilm}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="starships"
              />
            </div>
          )}
          {vehiclesFilm.length > 0 && view.VEHICLES && (
            <div className="flex flex-col overflow-hidden h-[286px]">
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>Vehicles {vehiclesFilm.length} </strong>
              </h3>
              <GridList
                list={vehiclesFilm}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="vehicles"
              />
            </div>
          )}
          {planetsFilm.length > 0 && view.PLANETS && (
            <div className="flex flex-col overflow-hidden h-[286px]">
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>Planets {planetsFilm.length} </strong>
              </h3>
              <GridList
                list={planetsFilm}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="planets"
              />
            </div>
          )}
        </article>
      </section>
    )
  );
}
