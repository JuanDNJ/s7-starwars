import { DetailPicture } from "./DetailPicture";

export default function DetailShip({ ship }) {
  return (
    <article className="flex gap-4">
      <div className="flex-1">
        <DetailPicture id={ship && ship.pictureId} />
      </div>
      <div className="flex-1 flex gap-2">
        <strong>Model&nbsp;:</strong>
        <span>{ship.model}</span>
      </div>
    </article>
  );
}
