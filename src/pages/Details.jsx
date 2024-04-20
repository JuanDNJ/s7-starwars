import { Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApi } from "../utils";
import DetailShip from "../components/DetailShip";
import Aside from "../components/Aside";
import Menu from "../components/Menu";
import GoToPage from "../components/GoToPage";
export default function Deatils() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [ship, setShip] = useState("");

  const getShip = async () => {
    const ship = await getApi(`starships/${id}`);
    setShip(() => ({ ...ship, pictureId: id }));
  };
  console.log(id);
  useEffect(() => {
    getShip();
  }, []);
  return (
    <section className="flex flex-col gap-4">
      <Aside top>{ship.name}</Aside>
      <section className="order-0">
        {ship && <DetailShip ship={ship} />}
      </section>
      <Aside bottom>
        <Menu>
          <GoToPage url={"films"}>Films</GoToPage>
          <GoToPage url={"pilots"}>Pilots</GoToPage>
        </Menu>
      </Aside>
      <section className="order-2 p-4">
        <Outlet />
      </section>
    </section>
  );
}
