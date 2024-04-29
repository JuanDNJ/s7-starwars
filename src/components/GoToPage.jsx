import { NavLink } from "react-router-dom";

export default function GoToPage({ children, url, _blank, icon, font, title }) {
  let target = "";
  let linkClass = "font-bold pb-1";

  if (icon) linkClass = "flex justify-center items-center ";

  if (_blank) target = "_blank";

  if (title) {
    linkClass = "flex flex-col ";
  }
  return (
    <NavLink
      target={target}
      className={`${linkClass} text-[1rem] ${font} hover:text-yellow-500`}
      to={url}
    >
      {children}
    </NavLink>
  );
}
