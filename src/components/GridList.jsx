import { VISUAL_GUIDE_URL, RESOURCES_FILMS } from "../config";
import { getIdByUrl } from "../utils";
import GoToPage from "./GoToPage";

export default function GridList({ list, cols, type }) {
  return (
    <div
      className={`grid ${cols} gap-y-4 gap-x-2 p-4 overflow-y-auto grid__list`}
    >
      {list.map((resource) => (
        <GoToPage
          key={resource.name}
          url={`${
            type === "starships"
              ? "/starships/detail/films"
              : `/detail/film/${type.slice(0, type.length - 1)}`
          }?id=${getIdByUrl(resource.url)}`}
        >
          <div className="flex  relative hover:scale-110 transition-transform duration-300 cursor-pointer">
            <strong className="absolute bottom-0 text-[.7rem] bg-[rgba(0,0,0,.8)] border-t-2 border-t-orange-500 w-[100%] p-1">
              {resource.name}
            </strong>
            {RESOURCES_FILMS.CHARACTERS === type && (
              <img
                src={
                  VISUAL_GUIDE_URL +
                  "/characters/" +
                  getIdByUrl(resource.url) +
                  ".jpg"
                }
                alt={resource.name}
                className="object-cover w-full h-full min-h-28"
              />
            )}
            {RESOURCES_FILMS.SPECIES === type && (
              <img
                src={
                  VISUAL_GUIDE_URL +
                  "/" +
                  type +
                  "/" +
                  +getIdByUrl(resource.url) +
                  ".jpg"
                }
                alt={resource.name}
                className="object-cover w-full h-full min-h-28"
              />
            )}
            {RESOURCES_FILMS.STAR_SHIPS === type && (
              <img
                src={
                  VISUAL_GUIDE_URL +
                  "/" +
                  type +
                  "/" +
                  getIdByUrl(resource.url) +
                  ".jpg"
                }
                alt={resource.name}
                className="object-cover w-full h-full min-h-28"
              />
            )}
            {RESOURCES_FILMS.VEHICLES === type && (
              <img
                src={
                  VISUAL_GUIDE_URL +
                  "/" +
                  type +
                  "/" +
                  getIdByUrl(resource.url) +
                  ".jpg"
                }
                alt="Image not found"
              />
            )}
            {RESOURCES_FILMS.PLANETS === type && (
              <img
                src={
                  VISUAL_GUIDE_URL +
                  "/" +
                  type +
                  "/" +
                  getIdByUrl(resource.url) +
                  ".jpg"
                }
                alt={resource.name}
                className="object-cover w-full h-full min-h-28"
              />
            )}
          </div>
        </GoToPage>
      ))}
    </div>
  );
}
