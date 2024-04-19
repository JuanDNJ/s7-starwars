// eslint-disable-next-line react/prop-types
export default function Menu({ children, justify }) {
  return (
    <nav className={`flex items-center justify-${justify} gap-4 p-4`}>
      {children}
    </nav>
  );
}
