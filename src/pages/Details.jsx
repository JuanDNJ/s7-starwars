import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  // REDUX TOOLKIT
  const { isLoading, error, data } = useAppSelector((state) => state.starShip);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetStarShipById(id));
    navigate(`films?id=${id}`);
  }, [id]);

  return (
    <section className="flex flex-col gap-4 mt-10">
      {error && "Error loading"}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Aside
            text="font-title text-yellow-200 text-[.8rem] first-letter:text-lg "
            top
          >
            {data.name}
          </Aside>
          <section className="order-0 md:p-8">
            {<DetailShip ship={{ ...data, id }} />}
          </section>
          <Aside bottom>
            <Menu sticky="sticky top-96">
              <section className="col-span-4 md:col-span-6 flex gap-4">
                {data.films && data.films.length > 0 && (
                  <GoToPage url={`films?id=${id}`}>Films</GoToPage>
                )}
                {data.pilots && data.pilots.length > 0 && (
                  <GoToPage url={`pilots?id=${id}`}>Pilots</GoToPage>
                )}
              </section>
            </Menu>
          </Aside>
        </>
      )}
      <section className="order-2">
        <Outlet />
      </section>
    </section>
  );
}
