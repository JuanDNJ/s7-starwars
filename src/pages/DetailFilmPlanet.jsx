import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOnlyObjectResource } from "../utils";
import { ItemList, ListTitle } from "../components";

export default function DetailFilmplanet() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [planet, startPlanet] = useState();
  useEffect(() => {
    getOnlyObjectResource("planets", id, (resource) => {
      startPlanet(() => resource);
    });
  }, []);
  return (
    planet && (
      <section className="flex flex-col gap-4 p-4 ">
        <section className="grid grid-cols-12 gap-4">
          <article className="col-span-12 md:col-span-5 flex justify-center">
            <img
              src={planet.picture}
              alt={planet.name}
              className="object-scale-down"
            />
          </article>
          <ul className="col-span-12 md:col-span-7 flex flex-col p-4 gap-1">
            <ListTitle>{planet.name}</ListTitle>
            <ItemList text="Rotation period" payload={planet.rotation_period} />
            <ItemList text="Orbital period" payload={planet.orbital_period} />
            <ItemList text="Diameter" payload={planet.diameter} />
            <ItemList text="Climate" payload={planet.climate} />
            <ItemList text="Gravity" payload={planet.gravity} />
            <ItemList text="Terrain" payload={planet.terrain} />
            <ItemList text="Surface water" payload={planet.surface_water} />
            <ItemList text="Population" payload={planet.population} />
            <ItemList text="Residents" payload={planet.residents.length} />
          </ul>
        </section>
      </section>
    )
  );
}

/**
 * 
 * return (
    planet && (
      <section className="flex flex-col gap-4 p-4 ">
        <section className="grid grid-cols-12 gap-4">
          <article className="col-span-12 md:col-span-5 flex justify-center">
            <img
              src={planet.picture}
              alt={planet.name}
              className="object-scale-down"
            />
          </article>

          <ul className="col-span-12 md:col-span-7 flex flex-col p-4 gap-1">
            <ListTitle>{planet.name}</ListTitle>
            <ItemList text="Classification" payload={planet.classification} />
            <ItemList text="Designation" payload={planet.designation} />
            <ItemList text="Average height" payload={planet.average_height} />
            <ItemList text="Skin colors" payload={planet.skin_colors} />
            <ItemList text="Eye colors" payload={planet.eye_colors} />
            <ItemList
              text="Average lifespan"
              payload={planet.average_lifespan}
            />
            <ItemList text="Homeworld" payload={planet.homeworld} />
            <ItemList text="Language" payload={planet.language} />
            <ItemList text="people" payload={planet.people.length} />
            <ItemList text="films" payload={planet.films.length} />
          </ul>
        </section>
      </section>
    )
  );
 */
