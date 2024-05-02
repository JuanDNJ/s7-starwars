import { VISUAL_GUIDE_URL, RESOURCES_FILMS } from "../config";
import { getIdByUrl } from "../utils";
import GoToPage from "./GoToPage";

export default function GridList({ list, cols, typePicture }) {
  return (
    <div
      className={`grid ${cols} gap-y-4 gap-x-2 h-full p-4 overflow-y-auto grid__list`}
    >
      {list.map((people) => (
        <GoToPage
          key={people.name}
          url={`/detail/film/character?id=${getIdByUrl(people.url)}`}
        >
          <div className="relative hover:scale-110 transition-transform duration-300 cursor-pointer">
            <strong className="absolute bottom-0 text-[.7rem] bg-[rgba(0,0,0,.8)] border-t-2 border-t-orange-500 w-[100%] p-1">
              {people.name}
            </strong>
            {RESOURCES_FILMS.CHARACTERS === typePicture && (
              <img
                className="filmCharacterImg"
                src={
                  VISUAL_GUIDE_URL +
                  "/characters/" +
                  getIdByUrl(people.url) +
                  ".jpg"
                }
                alt=""
              />
            )}
            {RESOURCES_FILMS.SPECIES === typePicture && (
              <img
                className="filmCharacterImg"
                src={
                  VISUAL_GUIDE_URL +
                  "/" +
                  typePicture +
                  "/" +
                  +getIdByUrl(people.url) +
                  ".jpg"
                }
                alt=""
              />
            )}
            {RESOURCES_FILMS.STAR_SHIPS === typePicture && (
              <img
                className="filmCharacterImg"
                src={
                  VISUAL_GUIDE_URL +
                  "/" +
                  typePicture +
                  "/" +
                  getIdByUrl(people.url) +
                  ".jpg"
                }
                alt="Image not found"
              />
            )}
            {RESOURCES_FILMS.VEHICLES === typePicture && (
              <img
                className="filmCharacterImg"
                src={
                  VISUAL_GUIDE_URL +
                  "/" +
                  typePicture +
                  "/" +
                  getIdByUrl(people.url) +
                  ".jpg"
                }
                alt="Image not found"
              />
            )}
            {RESOURCES_FILMS.PLANETS === typePicture && (
              <img
                className="filmCharacterImg"
                src={
                  VISUAL_GUIDE_URL +
                  "/" +
                  typePicture +
                  "/" +
                  getIdByUrl(people.url) +
                  ".jpg"
                }
                alt="Image not found"
              />
            )}
          </div>
        </GoToPage>
      ))}
    </div>
  );
}
