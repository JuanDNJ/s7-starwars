import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Aside, GridList, ItemList, ListTitle } from "../components";
import viewIcon from "../assets/images/svg/view.svg";
import { useDetailFilm } from "../hooks/useDetailFilm";
import { RESOURCES_FILMS } from "../config";

export default function DetailFilm() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const resourcesFilms = () => {
    const temporalKeys = Object.values(RESOURCES_FILMS);
    return temporalKeys.map((key) => {
      if (key !== "films") {
        return (
          <a
            key={key}
            href={`#${key}`}
            onClick={(event) => event.preventDefault()}
          >
            <strong
              onClick={() => toggleView(key)}
              className="group group inline-flex items-center justify-center p-2 gap-2 hover:text-yellow-300"
            >
              {key.toUpperCase()}
              <img
                src={viewIcon}
                className="group-hover:scale-75"
                alt="View Icon"
              />
            </strong>
          </a>
        );
      }
    });
  };

  const {
    view,
    film,
    character,
    species,
    planets,
    vehicles,
    starships,
    toggleView,
    addResourceByFilm,
    getFilmById,
  } = useDetailFilm();

  const callResourcesFilm = () => {
    addResourceByFilm(id, "starships");
    addResourceByFilm(id, "characters");
    addResourceByFilm(id, "species");
    addResourceByFilm(id, "planets");
    addResourceByFilm(id, "vehicles");
  };

  useEffect(() => {
    getFilmById(id);
    callResourcesFilm();
  }, []);

  return (
    film && (
      <section className="flex flex-col gap-4 p-4 ">
        <section className="grid grid-cols-12 gap-4 ">
          <article className="col-span-12 md:col-span-5 flex justify-center">
            <img
              src={film.picture}
              alt="Picture by film"
              className="object-scale-down"
            />
          </article>

          <ul className="col-span-12 md:col-span-7 flex flex-col p-4 gap-2">
            <ListTitle>
              <strong>{film.title}</strong>
              <span className="text-sm text-blue-300 ml-2">
                Episoded {film.episode_id}
              </span>
            </ListTitle>

            <ItemList text="Director" payload={film.director} />
            <ItemList text="Produced" payload={film.producer} />
            <ItemList text="Date realase" payload={film.release_date} />
            <p className="py-4">{film.opening_crawl}</p>
            <iframe
              width="100%"
              height="315"
              src={film.trailer}
              title={film.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </ul>
        </section>
        <Aside>{resourcesFilms()}</Aside>
        <article className="grid md:grid-cols-2 gap-2">
          {character.length > 0 && view.CHARACTERS && (
            <div className={`flex flex-col overflow-hidden h-[286px]`}>
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>Characters {character.length} </strong>
              </h3>

              <GridList
                list={character}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="characters"
              />
            </div>
          )}
          {species.length > 0 && view.SPECIES && (
            <div
              id="species"
              className={`flex flex-col overflow-hidden h-[286px]`}
            >
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>Species {species.length} </strong>
              </h3>
              <GridList
                list={species}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="species"
              />
            </div>
          )}
          {starships.length > 0 && view.STARSHIPS && (
            <div className="flex flex-col overflow-hidden h-[286px]">
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>StarShips {starships.length} </strong>
              </h3>
              <GridList
                list={starships}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="starships"
              />
            </div>
          )}
          {vehicles.length > 0 && view.VEHICLES && (
            <div className="flex flex-col overflow-hidden h-[286px]">
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>Vehicles {vehicles.length} </strong>
              </h3>
              <GridList
                list={vehicles}
                cols="grid-cols-2 md:grid-cols-3"
                typePicture="vehicles"
              />
            </div>
          )}
          {planets.length > 0 && view.PLANETS && (
            <div className="flex flex-col overflow-hidden h-[286px]">
              <h3 className="flex gap-4 py-4 font-title text-yellow-200">
                <strong>Planets {planets.length} </strong>
              </h3>
              <GridList
                list={planets}
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
