// eslint-disable-next-line react/prop-types
export default function Menu({ children, gridCols = 12, border }) {
  return (
    <nav
      className={`grid grid-flow-col grid-cols-${gridCols} ${border} items-center gap-4 p-2`}
    >
      {children}
    </nav>
  );
}
