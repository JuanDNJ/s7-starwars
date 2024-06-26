import { useEffect, useState } from "react";
import { getPicture } from "../utils";
import ship404 from "../assets/images/jpg/ship404.jpg";
export default function DetailPicture({ id }) {
  const [imgShip, setImgShip] = useState();
  const picture = async () => {
    const img = await getPicture(id);
    setImgShip(() => (img ? img.url : ship404));
  };
  useEffect(() => {
    picture();
  }, []);
  return (
    <article className="flex-1 flex items-center justify-center">
      <img
        style={{
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={imgShip}
        alt="Ship image"
      />
    </article>
  );
}
