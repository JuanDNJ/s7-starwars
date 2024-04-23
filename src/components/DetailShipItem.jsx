export default function DetailShipItem({ left, right }) {
  return (
    <li className="flex gap-2">
      <strong className="text-yellow-400 font-title">{left}&nbsp;:</strong>
      <span>{right}</span>
    </li>
  );
}
