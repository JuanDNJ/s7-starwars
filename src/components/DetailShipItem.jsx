export default function DetailShipItem({ left, right }) {
  return (
    <li className="flex gap-2">
      <strong className="text-stone-500 font-title">{left}&nbsp;:</strong>
      <span className="text-stone-200 ">{right}</span>
    </li>
  );
}
