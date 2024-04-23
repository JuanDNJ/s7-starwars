import { Link } from "react-router-dom";

export default function GoToPage({ children, url, _blank, icon }) {
  let target = "";
  let linkClass =
    "text-sm font-bold border-b-[1px] pb-1 border-b-transparent hover:border-b-stone-500 hover:text-yellow-400";

  if (icon)
    linkClass =
      "flex justify-center items-center text-violet-400 font-extrabold  ";

  if (_blank) target = "_blank";

  return (
    <Link target={target} className={linkClass} to={url}>
      {children}
    </Link>
  );
}
