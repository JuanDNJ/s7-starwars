export default function Logo({ title, subTitle }) {
  let prevTitle = "";
  let prevSubtitle = "";

  if (title)
    prevTitle = (
      <strong className="font-title text-yellow-300 text-5xl md:text-7xl font-bold text-center">
        {title}
      </strong>
    );
  if (subTitle)
    prevSubtitle = (
      <strong className="font-title text-yellow-300 text-5xl md:text-7xl font-bold text-center">
        {subTitle}
      </strong>
    );

  return (
    <section className="flex items-center justify-center p-4">
      {title && !subTitle && <div>{prevTitle}</div>}
      {title && subTitle && (
        <div className="flex flex-col">
          {prevTitle}
          {prevSubtitle}
        </div>
      )}
    </section>
  );
}
