import { useParams } from "react-router-dom";

export default function Deatils() {
  const { id } = useParams();
  return <h1>Hola Detail {id}</h1>;
}
