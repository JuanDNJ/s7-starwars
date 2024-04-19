const STAR_WARS = "https://swapi.dev/api/";

export async function getApi(resource) {
  try {
    const request = await fetch(`${STAR_WARS}${resource}`);
    if (!request.ok) throw new Error("Couldn't get API from " + url);
    const result = await request.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
