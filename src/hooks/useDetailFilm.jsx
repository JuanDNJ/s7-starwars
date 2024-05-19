import { useState } from "react";
import { RESOURCES_FILMS, trailers } from "../config";
import { getFilm, getResourceByFilm } from "../utils";

export const useDetailFilm = () => {
  const [film, setFilm] = useState(null);
  const [character, setCharacter] = useState([]);
  const [species, setSpecies] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  const [view, setView] = useState({
    SPECIES: false,
    CHARACTERS: false,
    PLANETS: false,
    VEHICLES: false,
    STARSHIPS: false,
  });
  const toggleView = (resource) => {
    switch (resource) {
      case RESOURCES_FILMS.CHARACTERS:
        setView((prev) => {
          return {
            ...prev,
            CHARACTERS: !prev.CHARACTERS,
          };
        });
        break;
      case RESOURCES_FILMS.SPECIES:
        setView((prev) => {
          return {
            ...prev,
            SPECIES: !prev.SPECIES,
          };
        });
        break;
      case RESOURCES_FILMS.VEHICLES:
        setView((prev) => {
          return {
            ...prev,
            VEHICLES: !prev.VEHICLES,
          };
        });
        break;
      case RESOURCES_FILMS.STAR_SHIPS:
        setView((prev) => {
          return {
            ...prev,
            STARSHIPS: !prev.STARSHIPS,
          };
        });
        break;
      case RESOURCES_FILMS.PLANETS:
        setView((prev) => {
          return {
            ...prev,
            PLANETS: !prev.PLANETS,
          };
        });
        break;
      default:
        break;
    }
  };
  const getTrailerByTitle = (title) => {
    return trailers.find(
      (trailer) => trailer.title.toLowerCase() === title.toLowerCase()
    );
  };
  const addResourceByFilm = (id, resource) => {
    getResourceByFilm(id, resource, (payload) => {
      switch (resource) {
        case RESOURCES_FILMS.CHARACTERS:
          setCharacter(() => payload);
          break;
        case RESOURCES_FILMS.SPECIES:
          setSpecies(() => payload);
          break;
        case RESOURCES_FILMS.STAR_SHIPS:
          setStarships(() => payload);
          break;
        case RESOURCES_FILMS.PLANETS:
          setPlanets(() => payload);
          break;
        case RESOURCES_FILMS.VEHICLES:
          setVehicles(() => payload);
          break;
        default:
          break;
      }
    });
  };

  const getFilmById = (id) => {
    getFilm(id, (film) => {
      const trailer = getTrailerByTitle(film.title);
      setFilm(() => ({ ...film, trailer: trailer.url }));
    });
  };

  return {
    film,
    character,
    species,
    planets,
    vehicles,
    starships,
    view,
    toggleView,
    addResourceByFilm,
    getFilmById,
  };
};
