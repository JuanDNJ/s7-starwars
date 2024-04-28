import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export default function DetailPilot() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/films/${id}`)
      .then((res) => {
        console.log(res.json());
      })
      .catch((error) => console.error(error));
  }, []);
  return <h1>Detail Pilot {id}</h1>;
}
