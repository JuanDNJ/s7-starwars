import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";

import Logo from "../src/components/Logo";
import AppRoutes from "../src/routes/AppRoutes";
import { Provider } from "react-redux";
import store from "../src/store";
import DetailShip from "../src/components/DetailShip";
import CardFilm from "../src/components/CardFilm";

describe("Application", () => {
  afterEach(cleanup);

  it("should be starting redux-toolkit", () => {
    render(
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  });

  it("should be rendering the logo", () => {
    render(<Logo />);
  });

  it("should be rendering the title", () => {
    render(<Logo title="Star Wars" />);
    screen.getByText("Star Wars");
  });

  it("should be rendering the CardFilm", () => {
    render(<CardFilm film={{ url: "/starships/detail/films?id=9" }} />);
  });

  it("should be rendering the DetailShip", () => {
    render(
      <DetailShip
        ship={{ name: "Death Star", model: "DS-1 Orbital Battle Station" }}
      />
    );
  });
});
