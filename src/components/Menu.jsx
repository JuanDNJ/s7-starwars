// eslint-disable-next-line react/prop-types
export default function Menu({ children, border, justify, sticky, bg }) {
  return (
    <nav
      className={`${bg} flex justify-${justify} ${border} items-center p-2  ${sticky} z-10`}
    >
      {children}
    </nav>
  );
}
