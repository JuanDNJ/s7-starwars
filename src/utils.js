export const STAR_WARS = "https://swapi.py4e.com/api/";

export async function getApi(resource) {
  try {
    const request = await fetch(`${STAR_WARS}${resource}`);
    if (!request.ok) throw new Error("Couldn't get API from " + resource);
    const result = await request.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
export async function getPicture(resource) {
  try {
    const request = await fetch(
      `https://starwars-visualguide.com/assets/img/starships/${resource}.jpg`
    );
    if (!request.ok) throw new Error("Couldn't get API from " + resource);
    const picture = request;
    return picture;
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
