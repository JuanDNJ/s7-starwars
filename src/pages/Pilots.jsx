import { useSearchParams } from "react-router-dom";
import CardPilot from "../components/CardPilots";
import { getShip } from "../utils";
import { useEffect, useState } from "react";
export default function Pilots() {
  const [pilots, setPilots] = useState([]);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    getShip(id, "pilots", (rec) => {
      setPilots(() => rec);
    });
  }, []);
  return (
    <div className="grid__pilots">
      {pilots.map((rec, index) => (
        <CardPilot key={index} pilot={rec} />
      ))}
    </div>
  );
}
