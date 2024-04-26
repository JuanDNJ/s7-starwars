export default function Aside({ children, top, bottom, text }) {
  return (
    <aside
      className={`border border-l-0 border-r-0 border-stone-800 py-2  ${
        (top && "-order-1") || (bottom && "order-1")
      } `}
    >
      <h2 className={`px-4  ${text}`}>{children}</h2>
    </aside>
  );
}
