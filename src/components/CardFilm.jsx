import { STAR_WARS, VISUAL_GUIDE_URL } from "../utils";

export default function CardFilm({ film }) {
  let cloneFilm = structuredClone(film);

  if (cloneFilm.url.includes(STAR_WARS)) {
    //   console.log(movie.url.includes(STAR_WARS));
    const newUrl = cloneFilm.url
      .slice(cloneFilm.url.indexOf("films"), cloneFilm.url.lastIndexOf("/"))
      .concat(".jpg");

    cloneFilm = {
      ...cloneFilm,
      newUrl: VISUAL_GUIDE_URL.concat(newUrl),
    };
  }

  return (
    <div className="bg-[rgba(0,0,0,.5)] relative">
      <div className="absolute bottom-0 bg-[rgba(0,0,0,.9)] w-full px-4 py-2">
        <h2 className="text-xl">{cloneFilm.title}</h2>
        <div className="flex gap-4">
          <strong>Director:</strong>
          <span>{cloneFilm.director}</span>
        </div>
      </div>
      <img src={cloneFilm.newUrl} alt="Movie" />
    </div>
  );
}
