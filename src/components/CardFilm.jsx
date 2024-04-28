import { getIdByUrl, getPictureByUrl } from "../utils";
import GoToPage from "./GoToPage";

export default function CardFilm({ film }) {
  let cloneFilm = structuredClone(film);
  cloneFilm = {
    ...cloneFilm,
    picture: getPictureByUrl(cloneFilm.url, "films"),
  };

  const urlFilm = getIdByUrl(cloneFilm.url);

  return (
    <GoToPage url={`/detail/film?id=${urlFilm}`}>
      <div className="bg-[rgba(0,0,0,.5)] relative rounded-t-xl overflow-hidden border border-stone-700">
        <div className="absolute bottom-0 bg-[rgba(0,0,0,.9)] w-full border-t-2 border-yellow-600 py-1 px-4">
          <h2 className="text-[.9rem] md:text-[1rem] text-stone-300">
            {cloneFilm.title}
          </h2>
          <div className="flex gap-4 text-blue-400 text-[.6rem] md:text-[.8rem]">
            <strong>Director:</strong>
            <span>{cloneFilm.director}</span>
          </div>
        </div>
        <img src={cloneFilm.picture} alt="Movie" />
      </div>
    </GoToPage>
  );
}
