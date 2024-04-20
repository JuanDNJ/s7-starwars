export default function Logo({ title, imageSrc }) {
  let render = "";
  if (title)
    render = (
      <h1 className="text-yellow-400 text-6xl font-bold text-center">
        {title}
      </h1>
    );
  if (imageSrc)
    render = <img width={32} height={32} src={imageSrc} alt={"Logo"} />;

  if (title && imageSrc)
    render = (
      <div className="flex items-center justify-center">
        <h1 className="text-yellow-400 text-6xl font-bold text-center">
          {title}
        </h1>
        <img width={32} height={32} src={imageSrc} alt={"Logo"} />
      </div>
    );
  return <section>{render}</section>;
}
