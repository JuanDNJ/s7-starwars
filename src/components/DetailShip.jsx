import DetailPicture from "./DetailPicture";
import { ItemList, UnorderedList, ListTitle } from "./index";

export default function DetailShip({ ship }) {
  return (
    <article className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <DetailPicture id={ship && ship.id} />
      </div>
      <UnorderedList>
        <ListTitle>{ship.name}</ListTitle>
        <ItemList text={"Model"} payload={ship.model} />
        <ItemList text={"Starship class"} payload={ship.starship_class} />
        <ItemList text={"Cost in credits"} payload={ship.cost_in_credits} />
        <ItemList text={"Length"} payload={ship.length} />
        <ItemList text={"Crew"} payload={ship.crew} />
        <ItemList text={"Passengers"} payload={ship.passengers} />
        <ItemList text={"Cargo capacity"} payload={ship.cargo_capacity} />
        <ItemList text={"Consumables"} payload={ship.consumables} />
        <ItemList text={"Hyperdrive rating"} payload={ship.hyperdrive_rating} />
        <ItemList text={"MGLT"} payload={ship.MGLT} />
      </UnorderedList>
    </article>
  );
}
