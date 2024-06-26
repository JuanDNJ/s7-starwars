import { useNavigate } from "react-router";

export default function Logo({ title, subTitle }) {
  let prevTitle = "";
  let prevSubtitle = "";
  const navigate = useNavigate();
  if (title)
    prevTitle = (
      <strong className="font-title  text-5xl md:text-7xl font-bold text-center">
        {title}
      </strong>
    );
  if (subTitle)
    prevSubtitle = (
      <strong className="font-title  text-5xl md:text-7xl font-bold text-center">
        {subTitle}
      </strong>
    );

  return (
    <section className="flex items-center justify-center p-4">
      {title && !subTitle && <div>{prevTitle}</div>}

      {title && subTitle && (
        <h1
          onClick={() => navigate("/")}
          className="flex flex-col text-white hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
        >
          {prevTitle}
          {prevSubtitle}
        </h1>
      )}
    </section>
  );
}
