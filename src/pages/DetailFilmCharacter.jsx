import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getOnlyObjectResource } from "../utils";
import { Aside, CardFilmCharacter, GoToPage } from "../components";

export default function DetailFilmCharacter() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [filmCharacter, initFilmCharacter] = useState(null);
  useEffect(() => {
    getOnlyObjectResource("people", id, (resource) => {
      initFilmCharacter(() => resource);
    });
  }, [id]);
  return (
    filmCharacter && (
      <section>
        <Aside>
          <GoToPage url={`/starships/detail/films?id=${2}`}>Go back</GoToPage>
        </Aside>
        <CardFilmCharacter character={filmCharacter} />
      </section>
    )
  );
}
