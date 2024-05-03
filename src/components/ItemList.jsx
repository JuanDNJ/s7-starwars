export default function ItemList({ text, payload }) {
  return (
    <li className="flex gap-2 text-sm">
      <strong className="text-blue-300">{text}&nbsp;: </strong>
      <span className="text-stone-200">{payload}</span>
    </li>
  );
}
