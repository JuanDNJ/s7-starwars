import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import ship404 from "../assets/images/ship404.jpg";
import { useEffect, useState } from "react";
import { getPicture } from "../utils";
export default function Deatils() {
  const { id } = useParams();
  let [searchParams] = useSearchParams();
  const [shipImg, setShipImg] = useState("");
  const picture = async () => {
    const img = await getPicture(searchParams.get("id"));
    setShipImg(() => (img ? img.url : ship404));
  };
  console.log(searchParams.get("id"));
  useEffect(() => {
    picture();
  }, []);
  return (
    <section className="grid md:grid-flow-col">
      <article className="">
        <img
          className="ship__detail"
          height={345}
          src={shipImg}
          alt="Ship image"
        />
      </article>
      <article className="">
        <h1>Hola Detail {id}</h1>
      </article>
    </section>
  );
}
