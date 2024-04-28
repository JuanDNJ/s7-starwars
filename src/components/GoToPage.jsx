import { Link } from "react-router-dom";

export default function GoToPage({ children, url, _blank, icon, font }) {
  let target = "";
  let linkClass =
    "font-bold border-b-[1px] pb-1 border-b-transparent hover:border-b-yellow-500 hover:text-yellow-200";

  if (icon)
    linkClass =
      "flex justify-center items-center text-violet-400 font-extrabold  ";

  if (_blank) target = "_blank";

  return (
    <Link
      target={target}
      className={`${linkClass} text-[1rem] ${font}`}
      to={url}
    >
      {children}
    </Link>
  );
}
