export default function ErrorFirebase({ error }) {
  return (
    <strong className="text-orange-400 text-[12px] text-center absolute  -top-3  w-full invalid">
      {error ? error.code.toUpperCase() : ""}
    </strong>
  );
}
