import { DetailPicture, DetailShipItem } from "./index";
export default function DetailShip({ ship }) {
  return (
    <article className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <DetailPicture id={ship && ship.id} />
      </div>
      <ul className="flex-1 flex flex-col p-4">
        <h2 className="font-title text-yellow-200 border-b-2 border-yellow-700 pb-1 mb-2 first-letter:text-2xl pl-1">
          {ship.name}
        </h2>
        <DetailShipItem left={"Model"} right={ship.model} />
        <DetailShipItem left={"Starship class"} right={ship.starship_class} />
        <DetailShipItem left={"Cost in credits"} right={ship.cost_in_credits} />
        <DetailShipItem left={"Length"} right={ship.length} />
        <DetailShipItem left={"Crew"} right={ship.crew} />
        <DetailShipItem left={"Passengers"} right={ship.passengers} />
        <DetailShipItem left={"Cargo capacity"} right={ship.cargo_capacity} />
        <DetailShipItem left={"Consumables"} right={ship.consumables} />
        <DetailShipItem
          left={"Hyperdrive rating"}
          right={ship.hyperdrive_rating}
        />
        <DetailShipItem left={"MGLT"} right={ship.MGLT} />
      </ul>
    </article>
  );
}
