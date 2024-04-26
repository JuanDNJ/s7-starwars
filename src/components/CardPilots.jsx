import { STAR_WARS, VISUAL_GUIDE_URL } from "../utils";

export default function CardPilot({ pilot }) {
  let clonePilot = structuredClone(pilot);

  if (clonePilot.url.includes(STAR_WARS)) {
    //   console.log(movie.url.includes(STAR_WARS));
    const newUrl = clonePilot.url
      .slice(clonePilot.url.indexOf("people"), clonePilot.url.lastIndexOf("/"))
      .concat(".jpg");

    clonePilot = {
      ...clonePilot,
      newUrl: VISUAL_GUIDE_URL.concat(newUrl.replace("people", "characters")),
    };
  }

  return (
    <article className="bg-[rgba(0,0,0,.5)] relative  rounded-t-xl overflow-hidden border border-stone-700">
      <div className="absolute bottom-0 bg-[rgba(0,0,0,.9)] w-full px-4 py-2 border-t-2 border-yellow-600 ">
        <h2 className="text-lg text-stone-300">{clonePilot.name}</h2>
      </div>
      <img src={clonePilot.newUrl} alt="Movie" />
    </article>
  );
}
