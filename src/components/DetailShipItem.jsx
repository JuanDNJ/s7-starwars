export default function DetailShipItem({ left, right }) {
  return (
    <li className="flex gap-2 text-sm">
      <strong className="text-blue-300 font-title">{left}&nbsp;:</strong>
      <span className="text-stone-200 ">{right}</span>
    </li>
  );
}
