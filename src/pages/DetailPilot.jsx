import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getOnlyObjectResource } from "../utils";
import { Aside, CardFilmCharacter, GoToPage } from "../components";

export default function DetailPilot() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const shipId = searchParams.get("shipId");
  const [pilot, startPilot] = useState();

  useEffect(() => {
    getOnlyObjectResource("people", id, (resource) => {
      startPilot(() => resource);
    });
  }, []);
  return (
    pilot && (
      <section className="flex flex-col">
        <Aside>
          <GoToPage url={`/starships/detail/pilots?id=${shipId}`}>
            Go back
          </GoToPage>
        </Aside>
        <CardFilmCharacter character={pilot} />
      </section>
    )
  );
}
