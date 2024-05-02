import ItemList from "./ItemList";
import ListTitle from "./ListTitle";
import UnorderedList from "./UnorderedList";

export default function CardFilmCharacter({ character }) {
  return (
    <article className="flex flex-col md:flex-row">
      <article className="flex justify-center p-4">
        <img
          className="max-w-96 object-cover"
          src={character.picture}
          alt={character.picture}
        />
      </article>
      <article className="flex flex-col items-center p-4 ">
        <UnorderedList>
          <ListTitle>{character.name}</ListTitle>
          <ItemList text="Home World" payload={character.homeworld} />
          <ItemList text="Birth year" payload={character.birth_year} />
          <ItemList text="Gender" payload={character.gender} />
          <ItemList text="Skin color" payload={character.skin_color} />
          <ItemList text="Hair color" payload={character.hair_color} />
          <ItemList text="Eye color" payload={character.eye_color} />
          <ItemList text="Mass" payload={character.mass} />
          <ItemList text="Films" payload={character.films.length} />
          <ItemList text="Star Ships" payload={character.starships.length} />
          <ItemList text="Specie" payload={character.species[0]} />
          <ItemList text="Vehicles" payload={character.vehicles.length} />
        </UnorderedList>
      </article>
    </article>
  );
}
