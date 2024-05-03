import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOnlyObjectResource } from "../utils";
import { ItemList, ListTitle } from "../components";

export default function DetailFilmSpecie() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [specie, startSpecie] = useState();
  useEffect(() => {
    getOnlyObjectResource("species", id, (resource) => {
      startSpecie(() => resource);
    });
  }, []);
  return (
    specie && (
      <section className="flex flex-col gap-4 p-4 ">
        <section className="grid grid-cols-12 gap-4">
          <article className="col-span-12 md:col-span-5 flex justify-center">
            <img
              src={specie.picture}
              alt={specie.name}
              className="object-scale-down"
            />
          </article>

          <ul className="col-span-12 md:col-span-7 flex flex-col p-4 gap-1">
            <ListTitle>{specie.name}</ListTitle>
            <ItemList text="Classification" payload={specie.classification} />
            <ItemList text="Designation" payload={specie.designation} />
            <ItemList text="Average height" payload={specie.average_height} />
            <ItemList text="Skin colors" payload={specie.skin_colors} />
            <ItemList text="Eye colors" payload={specie.eye_colors} />
            <ItemList
              text="Average lifespan"
              payload={specie.average_lifespan}
            />
            <ItemList text="Homeworld" payload={specie.homeworld} />
            <ItemList text="Language" payload={specie.language} />
            <ItemList text="people" payload={specie.people.length} />
            <ItemList text="films" payload={specie.films.length} />
          </ul>
        </section>
      </section>
    )
  );
}
