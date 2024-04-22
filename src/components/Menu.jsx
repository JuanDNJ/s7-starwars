// eslint-disable-next-line react/prop-types
export default function Menu({ children, gridCols = 12, border, sticky }) {
  return (
    <nav
      className={`bg-black grid grid-flow-col grid-cols-${gridCols} ${border} items-center gap-4 p-2 ${sticky} z-10`}
    >
      {children}
    </nav>
  );
}
