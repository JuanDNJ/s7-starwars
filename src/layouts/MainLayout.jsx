import { Outlet } from "react-router-dom";

export default function Mainlayout({ children }) {
  return (
    <section className="max-w-5xl m-auto bg-[rgba(0,0,0,.8)]">
      <article className="h-screen flex flex-col gap-2">
        <section className="flex flex-col">
          {children}
          <section className="z-0">
            <Outlet />
          </section>
        </section>
      </article>
    </section>
  );
}
