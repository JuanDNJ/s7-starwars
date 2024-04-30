import { VISUAL_GUIDE_URL, getIdByUrl } from "../utils";

export default function GridList({ list, cols, typePicture }) {
  return (
    <div
      className={`grid ${cols} border gap-y-4 gap-x-2 h-full p-4 overflow-y-scroll`}
    >
      {list.map((people, inx) => (
        <div
          key={inx}
          className="relative hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <strong className="absolute bottom-0 text-[.8rem] bg-black w-[100%] p-1">
            {people.name}
          </strong>
          {typePicture === "characters" && (
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
          {typePicture === "species" && (
            <img
              className="filmCharacterImg"
              src={
                VISUAL_GUIDE_URL + "/species/" + getIdByUrl(people.url) + ".jpg"
              }
              alt=""
            />
          )}
        </div>
      ))}
    </div>
  );
}
