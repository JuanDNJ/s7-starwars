import { Link } from "react-router-dom";
import { createUrlDetail } from "../utils";

export default function Ship({ payload }) {
  return (
    payload && (
      <article className="min-w-80 min-h-28 p-4 bg-stone-900 relative">
        <h2 className="text-2xl">{payload.name}</h2>
        <span className="text-sm">{payload.model}</span>
        <Link
          to={`/starships/detail/${createUrlDetail(payload.url)}`}
          className="px-2 py-1 absolute bottom-4 right-4"
        >
          View
        </Link>
      </article>
    )
  );
}
