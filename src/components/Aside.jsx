export default function Aside({ children, top, bottom }) {
  return (
    <aside
      className={`border border-l-0 border-r-0 border-stone-800 ${
        (top && "-order-1") || (bottom && "order-1")
      } `}
    >
      <h2 className="px-4 text-stone-400">{children}</h2>
    </aside>
  );
}
