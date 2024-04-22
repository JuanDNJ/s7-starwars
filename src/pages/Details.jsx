import { Outlet, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import DetailShip from "../components/DetailShip";
import Aside from "../components/Aside";
import Menu from "../components/Menu";
import GoToPage from "../components/GoToPage";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchGetStarShipById } from "../store/tunks";
import Loading from "../components/Loading";
export default function Deatils() {
  // Buscando el parametro id de la ruta
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  // REDUX TOOLKIT
  const { isLoading, error, data } = useAppSelector((state) => state.starShip);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetStarShipById(id));
  }, [id]);

  return (
    <section className="flex flex-col gap-4">
      {error && "Error loading"}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Aside top>{data.name}</Aside>
          <section className="order-0">
            {<DetailShip ship={{ ...data, pictureId: id }} />}
          </section>
          <Aside bottom>
            <Menu>
              <section className="col-span-4 md:col-span-6 flex gap-4">
                {data.films && data.films.length > 0 && (
                  <GoToPage url={`films?id=${id}`}>Films</GoToPage>
                )}
                {data.pilots && data.pilots.length > 0 && (
                  <GoToPage url={"pilots"}>Pilots</GoToPage>
                )}
              </section>
            </Menu>
          </Aside>
        </>
      )}
      <section className="order-2 p-4">
        <Outlet />
      </section>
    </section>
  );
}
