export default function ListTitle({ children }) {
  return (
    <h2 className="font-title text-yellow-200 border-b-2 border-yellow-700 pb-1 mb-2 first-letter:text-2xl pl-1">
      {children}
    </h2>
  );
}
