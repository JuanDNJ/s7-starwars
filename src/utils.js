export const STAR_WARS = "https://swapi.py4e.com/api/";
export const VISUAL_GUIDE_URL = "https://starwars-visualguide.com/assets/img/";
export const RESOURCES_STAR_WARS = [
  "root",
  "people",
  "films",
  "starships",
  "vehicles",
  "species",
  "planets",
];

export const RESOURCES_VISULA_GUIDE = [
  "character",
  "films",
  "species",
  "starships",
  "vehicles",
  "planets",
];

export const newUser = {
  email: "",
  displayName: "",
  uid: "",
  isLogin: false,
};

export async function getPicture(resource) {
  try {
    const request = await fetch(
      `https://starwars-visualguide.com/assets/img/starships/${resource}.jpg`
    );
    if (request.ok) return request;
  } catch (error) {
    console.error(error);
  }
}

export const getPictureByUrl = (url, resource) => {
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
};

export function createUrlDetail(payload) {
  const firstIndex = payload.indexOf("starship");
  const lastIndex = payload.lastIndexOf("/");
  const url = payload.slice(firstIndex, lastIndex).replace("/", "&id=");
  return `?${url}`;
}

export const createUser = (user) => {
  if (user.email && !user.displayName) {
    newUser.displayName = user.email.slice(0, user.email.indexOf("@"));
  } else {
    newUser.displayName = user.displayName;
  }
  newUser.email = user.email;
  newUser.uid = user.uid;
  newUser.isLogin = !!user;
  return newUser;
};

export const getShip = async (id, search, callBack) => {
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
};
export const getFilm = async (id, callback) => {
  const film = await fetch(`https://swapi.py4e.com/api/films/${id}`);
  const result = await film.json();
  callback({ ...result, picture: getPictureByUrl(result.url, "film") });
};

export const getResourceByFilm = async (idFilm, resource, callBack) => {
  try {
    const request = await fetch(STAR_WARS + "films/" + idFilm);

    if (request.ok) {
      const result = await request.json();
      let allResources = [];
      // GET ALL FILES BY RESOURCE

      if (resource === "starships") {
        allResources = result.starships.map(async (url) => {
          const pilotResponse = await fetch(url);
          if (pilotResponse.ok) {
            return pilotResponse.json();
          }
        });
      }
      if (resource === "characters") {
        allResources = result.characters.map(async (url) => {
          const pilotResponse = await fetch(url);
          if (pilotResponse.ok) {
            return pilotResponse.json();
          }
        });
      }
      if (resource === "species") {
        allResources = result.species.map(async (url) => {
          const pilotResponse = await fetch(url);
          if (pilotResponse.ok) {
            return pilotResponse.json();
          }
        });
      }
      if (resource === "planets") {
        allResources = result.planets.map(async (url) => {
          const pilotResponse = await fetch(url);
          if (pilotResponse.ok) {
            return pilotResponse.json();
          }
        });
      }
      if (resource === "vehicles") {
        allResources = result.vehicles.map(async (url) => {
          const pilotResponse = await fetch(url);
          if (pilotResponse.ok) {
            return pilotResponse.json();
          }
        });
      }
      const allPromises = await Promise.all(allResources);
      callBack(allPromises);
    } else {
      throw new Error("Invalid resource");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getIdByUrl = (url) => {
  // https://swapi.py4e.com/api/films/2/
  let ismatch = -1;
  for (let i = 0; i < RESOURCES_STAR_WARS.length; i++) {
    if (url.includes(STAR_WARS.concat(RESOURCES_STAR_WARS[i]))) {
      ismatch = url
        .replace(STAR_WARS.concat(RESOURCES_STAR_WARS[i]) + "/", "")
        .replace("/", "");
    }
  }
  return ismatch;
};
