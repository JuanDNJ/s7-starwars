export default function CardFilmCharacter({ character }) {
  return (
    <article className="flex">
      <article className="p-4">
        <img src={character.picture} alt={character.picture} />
      </article>
      <article className="p-4">
        <h2 className="text-yellow-300 text-2xl">{character.name}</h2>
        <div>
          <strong>Home World: {character.homeworld}</strong>
        </div>
        <div>
          <strong>Birth year: {character.birth_year}</strong>
        </div>
        <div>
          <strong>Gender: {character.gender}</strong>
        </div>
        <div>
          <strong>Skin color: {character.skin_color}</strong>
        </div>
        <div>
          <strong>Hair color: {character.hair_color}</strong>
        </div>
        <div>
          <strong>Eye color: {character.eye_color}</strong>
        </div>
        <div>
          <strong>Mass: {character.mass}</strong>
        </div>
        <div>
          <strong>Films: {character.films.length}</strong>
        </div>
        <div>
          <strong>Star Ships: {character.starships.length}</strong>
        </div>
        <div>
          <strong>Specie: {character.species[0]}</strong>
        </div>
        <div>
          <strong>Vehicles: {character.vehicles.length}</strong>
        </div>
      </article>
    </article>
  );
}
