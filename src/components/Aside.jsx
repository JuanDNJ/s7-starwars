export default function Aside({ children, top, bottom, text, align }) {
  return (
    <aside
      className={`border border-l-0 border-r-0 border-stone-800 ${
        (top && "-order-1") || (bottom && "order-1")
      } `}
    >
      <div
        className={`grid grid-cols-3 items-baseline gap-2 md:flex ${align} ${text}`}
      >
        {children}
      </div>
    </aside>
  );
}
