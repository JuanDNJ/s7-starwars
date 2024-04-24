export const STAR_WARS = "https://swapi.py4e.com/api/";
export const VISUAL_GUIDE_URL = "https://starwars-visualguide.com/assets/img/";
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
    const filmShip = await fetch(STAR_WARS + "starships/" + id);
    if (filmShip.ok) {
      const json = await filmShip.json();
      if (search === "films") {
        callBack(() => json.films);
      }
      if (search === "pilots") {
        callBack(() => json.pilots);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
