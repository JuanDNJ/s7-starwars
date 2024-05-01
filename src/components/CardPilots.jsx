import { getIdByUrl, getPictureByUrl } from "../utils";
import GoToPage from "./GoToPage";

export default function CardPilot({ pilot, shipId }) {
  let clonePilot = structuredClone(pilot);

  clonePilot = {
    ...clonePilot,
    picture: getPictureByUrl(clonePilot.url, "people"),
  };
  const pilotId = getIdByUrl(clonePilot.url);

  return (
    <GoToPage url={`/detail/pilot?id=${pilotId}&shipId=${shipId}`}>
      <article
        className="bg-[rgba(0,0,0,.5)] relative  rounded-t-xl overflow-hidden border border-stone-700"
        id={`${pilotId}`}
      >
        <div className="absolute bottom-0 bg-[rgba(0,0,0,.9)] w-full px-4 py-2 border-t-2 border-yellow-600 ">
          <h2 className="text-sm text-stone-300">{clonePilot.name}</h2>
        </div>
        <img src={clonePilot.picture} alt="Movie" />
      </article>
    </GoToPage>
  );
}
