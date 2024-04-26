import { Outlet } from "react-router-dom";

export default function Mainlayout({ children }) {
  return (
    <section className="max-w-5xl m-auto">
      <article className="h-screen flex flex-col gap-2">
        <section className="flex flex-col  bg-[rgba(0,0,0,0.7)]">
          {children}
          <section className="z-0 h-full bg-[rgba(2,5,20,0.3)]">
            <Outlet />
          </section>
        </section>
      </article>
    </section>
  );
}
