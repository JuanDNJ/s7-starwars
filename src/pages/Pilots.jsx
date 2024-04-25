import { useSearchParams } from "react-router-dom";
import CardPilot from "../components/CardPilots";
import { getShip } from "../utils";
import { Fragment, useEffect, useState } from "react";
export default function Pilots() {
  const [pilots, setPilots] = useState([]);
  const [renderPilots, setRenderPilots] = useState();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const getAllPilots = async () => {
    let arr = [];
    if (pilots) {
      for (let element of pilots) {
        const ob = await fetch(element);
        if (!ob.ok) throw new Error("Invalid");
        const jo = await ob.json();
        arr = [...arr, jo];
      }
      return arr;
    } else {
      return arr;
    }
  };
  const render = async () => {
    const pilots = await getAllPilots();
    setRenderPilots(() => pilots);
  };
  useEffect(() => {
    getShip(id, "pilots", setPilots);
    render();
    console.log(pilots);
  }, []);
  return (
    <Fragment>
      {renderPilots &&
        renderPilots.map((rec) => {
          JSON.stringify(rec);
        })}
      {/* <CardPilot pilot={id} />*/}
    </Fragment>
  );
}
