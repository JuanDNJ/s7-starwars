import Ship from "./Ship";

export default function List({ payload, children }) {
  return (
    <section>
      {children}
      {payload && (
        <ul className="list p-4 gap-6">
          {payload.map((item, idx) => (
            <Ship key={idx} payload={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
