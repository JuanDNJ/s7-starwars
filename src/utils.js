import {
  RESOURCES_FILMS,
  RESOURCES_STAR_WARS,
  STAR_WARS,
  VISUAL_GUIDE_URL,
  newUser,
} from "./config";

export async function getOnlyObjectResource(nameResource, id, callBack) {
  const request = await fetch(
    `https://swapi.py4e.com/api/${nameResource}/${id}`
  );
  if (!request.ok) return;
  const result = await request.json();
  callBack({
    ...result,
    picture: getPictureByUrl(result.url, nameResource),
  });
}

export async function getPicture(resource) {
  try {
    const request = await fetch(`${VISUAL_GUIDE_URL}starships/${resource}.jpg`);
    if (request.ok) return request;
  } catch (error) {
    console.error(error);
  }
}

export function getPictureByUrl(url, resource) {
  let newUrl = "";
  if (url.includes(STAR_WARS)) {
    //   console.log(movie.url.includes(STAR_WARS));
    if (resource === "people") {
      newUrl = url
        .slice(url.indexOf(resource), url.lastIndexOf("/"))
        .concat(".jpg")
        .replace("people", "characters");
    } else {
      newUrl = url
        .slice(url.indexOf(resource), url.lastIndexOf("/"))
        .concat(".jpg");
    }
  }
  return VISUAL_GUIDE_URL.concat(newUrl);
}

export function createUrlDetail(payload) {
  const firstIndex = payload.indexOf("starship");
  const lastIndex = payload.lastIndexOf("/");
  const url = payload.slice(firstIndex, lastIndex).replace("/", "&id=");
  return `?${url}`;
}

export function createUser(user) {
  if (user.email && !user.displayName) {
    newUser.displayName = user.email.slice(0, user.email.indexOf("@"));
  } else {
    newUser.displayName = user.displayName;
  }
  newUser.email = user.email;
  newUser.uid = user.uid;
  newUser.isLogin = !!user;
  return newUser;
}

export async function getShip(id, search, callBack) {
  try {
    const request = await fetch(STAR_WARS + "starships/" + id);
    if (request.ok) {
      const json = await request.json();
      if (search === "films") {
        const pilotsFilms = json.films.map(async (url) => {
          const pilotResponse = await fetch(url);
          return pilotResponse.json();
        });
        const allFilms = await Promise.all(pilotsFilms);
        callBack(allFilms);
      }
      if (search === "pilots") {
        // Obtener los pilotos de la nave
        const pilotsPromises = json.pilots.map(async (url) => {
          const pilotResponse = await fetch(url);
          return pilotResponse.json();
        });
        const allPilots = await Promise.all(pilotsPromises);
        callBack(allPilots);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getFilm(id, callback) {
  try {
    const film = await fetch(`${STAR_WARS}films/${id}`);
    if (!film.ok) throw new Error("Invalid id");
    const result = await film.json();
    callback({ ...result, picture: getPictureByUrl(result.url, "film") });
  } catch (error) {
    console.error(error);
  }
}

export async function getResourceByFilm(idFilm, resource, callBack) {
  try {
    const request = await fetch(`${STAR_WARS}films/${idFilm}`);

    if (!request.ok) throw new Error("Invalid resource");

    const result = await request.json();
    let allResources = [];

    if (RESOURCES_FILMS.STAR_SHIPS === resource) {
      allResources = result.starships.map(async (url) => {
        const pilotResponse = await fetch(url);
        if (pilotResponse.ok) {
          return pilotResponse.json();
        }
      });
    }
    if (RESOURCES_FILMS.CHARACTERS === resource) {
      allResources = result.characters.map(async (url) => {
        const pilotResponse = await fetch(url);
        if (pilotResponse.ok) {
          return pilotResponse.json();
        }
      });
    }
    if (RESOURCES_FILMS.SPECIES === resource) {
      allResources = result.species.map(async (url) => {
        const pilotResponse = await fetch(url);
        if (pilotResponse.ok) {
          return pilotResponse.json();
        }
      });
    }

    if (RESOURCES_FILMS.PLANETS === resource) {
      allResources = result.planets.map(async (url) => {
        const pilotResponse = await fetch(url);
        if (pilotResponse.ok) {
          return pilotResponse.json();
        }
      });
    }
    if (RESOURCES_FILMS.VEHICLES === resource) {
      allResources = result.vehicles.map(async (url) => {
        const pilotResponse = await fetch(url);
        if (pilotResponse.ok) {
          return pilotResponse.json();
        }
      });
    }
    const allPromises = await Promise.all(allResources);
    callBack(allPromises);
  } catch (error) {
    console.error(error);
  }
}

export function getIdByUrl(url) {
  try {
    let ismatch = "";
    for (let i = 0; i < RESOURCES_STAR_WARS.length; i++) {
      if (url.includes(STAR_WARS.concat(RESOURCES_STAR_WARS[i]))) {
        ismatch = url
          .replace(STAR_WARS.concat(RESOURCES_STAR_WARS[i]) + "/", "")
          .replace("/", "");
      }
    }
    return ismatch;
  } catch (error) {
    console.log(error);
  }
}
