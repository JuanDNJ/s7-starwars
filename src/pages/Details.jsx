import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Aside, Menu, DetailShip, GoToPage, Loading } from "../components";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchGetStarShipById } from "../store/tunks";

export default function Deatils() {
  // Buscando el parametro id de la ruta
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const active = searchParams.get("active");
  const navigate = useNavigate();

  // REDUX TOOLKIT
  const { isLoading, error, data } = useAppSelector((state) => state.starShip);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetStarShipById(id));
    if (active === "films") {
      navigate(`films?id=${id}`);
    }
  }, [id]);

  return (
    <section className="flex flex-col gap-4 mt-10">
      {error && "Error loading"}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Aside
            text="font-title text-yellow-200 text-[.8rem] pl-4 py-2 first-letter:text-lg "
            top
          >
            {data.name}
          </Aside>
          <section className="order-0 md:p-8" id="view">
            {<DetailShip ship={{ ...data, id }} />}
          </section>
          <Aside bottom text="">
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
      <section className="order-2" id="view">
        <Outlet />
      </section>
    </section>
  );
}
