export default function ErrorFirebase({ error }) {
  return (
    <strong className="text-orange-400 text-center absolute text-sm -top-0  w-full invalid">
      {error ? error.code.toUpperCase() : ""}
    </strong>
  );
}
