import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPictureByUrl } from "../utils";
import { Aside, GoToPage } from "../components";

export default function DetailPilot() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const shipId = searchParams.get("shipId");
  const [pilot, startPilot] = useState();
  const getPilot = async () => {
    const pilot = await fetch(`https://swapi.py4e.com/api/people/${id}`);
    if (!pilot.ok) return;
    const result = await pilot.json();
    startPilot((prev) => ({
      ...prev,
      ...result,
      picture: getPictureByUrl(result.url, "people"),
    }));
  };

  useEffect(() => {
    getPilot();
    console.log(pilot);
  }, []);
  return (
    pilot && (
      <section className="flex flex-col">
        <Aside>
          <GoToPage url={`/starships/detail/pilots?id=${shipId}`}>
            Go back
          </GoToPage>
        </Aside>

        <section className="flex">
          <article className="p-4">
            <img src={pilot.picture} alt={pilot.url} />
          </article>
          <article className="p-4">
            <h2 className="text-yellow-300 text-2xl">{pilot.name}</h2>
            <div>
              <strong>Home World: {pilot.homeworld}</strong>
            </div>
            <div>
              <strong>Birth year: {pilot.birth_year}</strong>
            </div>
            <div>
              <strong>Gender: {pilot.gender}</strong>
            </div>
            <div>
              <strong>Skin color: {pilot.skin_color}</strong>
            </div>
            <div>
              <strong>Hair color: {pilot.hair_color}</strong>
            </div>
            <div>
              <strong>Eye color: {pilot.eye_color}</strong>
            </div>
            <div>
              <strong>Mass: {pilot.mass}</strong>
            </div>
            <div>
              <strong>Films: {pilot.films.length}</strong>
            </div>
            <div>
              <strong>Star Ships: {pilot.starships.length}</strong>
            </div>
            <div>
              <strong>Specie: {pilot.species[0]}</strong>
            </div>
            <div>
              <strong>Vehicles: {pilot.vehicles.length}</strong>
            </div>
          </article>
        </section>
      </section>
    )
  );
}
