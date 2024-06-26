import { Link } from "react-router-dom";
import { createUrlDetail } from "../utils";
import viewShip from "../assets/images/svg/view.svg";
export default function Ship({ payload }) {
  return (
    payload && (
      <article className="min-w-80 min-h-28 p-4 bg-[rgba(33,33,33,.3)] relative rounded-md">
        <h2 className="text-2xl text-yellow-100">{payload.name}</h2>
        <span className="text-sm">{payload.model}</span>
        <Link
          to={`/starships/detail/${createUrlDetail(payload.url)}&active=films`}
          className="px-2 py-1 absolute bottom-4 right-4 hover:scale-90"
        >
          <img src={viewShip} alt="View Ship Detail" title="View Ship Detail" />
        </Link>
      </article>
    )
  );
}
