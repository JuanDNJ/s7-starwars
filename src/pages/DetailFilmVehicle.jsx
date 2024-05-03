import { useSearchParams } from "react-router-dom";
import { ItemList, ListTitle } from "../components";
import { useEffect, useState } from "react";
import { getOnlyObjectResource } from "../utils";

export default function DetailFilmVehicle() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [vehicle, startVehicle] = useState();
  useEffect(() => {
    getOnlyObjectResource("vehicles", id, (resource) => {
      startVehicle(() => resource);
    });
  }, []);
  return (
    vehicle && (
      <section className="flex flex-col gap-4 p-4">
        <section className="grid grid-cols-12 gap-4">
          <article className="col-span-12 md:col-span-5 flex justify-center">
            <img
              src={vehicle.picture}
              alt="Image Vehicle"
              className="object-scale-down"
            />
          </article>

          <ul className="col-span-12 md:col-span-7 flex flex-col p-4 gap-1">
            <ListTitle>{vehicle.name}</ListTitle>
            <ItemList text="Model" payload={vehicle.model} />
            <ItemList text="Manufacturer" payload={vehicle.manufacturer} />
            <ItemList
              text="Cost in credits"
              payload={vehicle.cost_in_credits}
            />
            <ItemList text="Length" payload={vehicle.length} />
            <ItemList
              text="Max atmosphering speed"
              payload={vehicle.max_atmosphering_speed}
            />
            <ItemList text="Crew" payload={vehicle.crew} />
            <ItemList text="Passengers" payload={vehicle.passengers} />
            <ItemList text="Cargo capacity" payload={vehicle.cargo_capacity} />
            <ItemList text="consumables" payload={vehicle.consumables} />
            <ItemList text="Vehicle class" payload={vehicle.vehicle_class} />
            <ItemList text="Pilots" payload={vehicle.pilots.length} />
            <ItemList text="Films" payload={vehicle.films.length} />
          </ul>
        </section>
      </section>
    )
  );
}
