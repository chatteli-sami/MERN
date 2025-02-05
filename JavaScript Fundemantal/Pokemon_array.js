<<<<<<< HEAD
const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 35, name: "Clefairy", types: ["normal"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

//an array of pokémon objects where the id is evenly divisible by 3
const divisibleBy3 = pokemon.filter((p) => p.id % 3 === 0);
console.log(divisibleBy3);

//Array of Pokémon objects that are "fire" type
const fireType = pokemon.filter((p) => p.types.includes("fire"));
console.log(fireType);

//Array of Pokémon objects that have more than one type
const multiType = pokemon.filter((p) => p.types.length > 1);
console.log(multiType);

//Array with just the names of the Pokémon
const names = pokemon.map((p) => p.name);
console.log(names);

//Array with just the names of Pokémon with an ID greater than 99
const nameOver99 = pokemon.filter((p) => p.id > 99).map((p) => p.name);
console.log(nameOver99);

//Array with just the names of the Pokémon whose only type is poison
const poisonOnly = pokemon
  .filter((p) => p.types.length === 1 && p.types[0] === "poison")
  .map((p) => p.name);
console.log(poisonOnly);

//Array containing just the first type of all the Pokémon whose second type is "flying"
const firstFlyingType = pokemon
  .filter((p) => p.types[1] === "flying")
  .map((p) => p.types[0]);
console.log(firstFlyingType);

//Count of the number of Pokémon that are "normal" type
const normalType = pokemon.filter((p) => p.types.includes("normal")).length;
console.log(normalType);

//Array with all Pokémon except the Pokémon with the ID of 148
const without148 = pokemon.filter((p) => p.id !== 148);
console.log(without148);

//Array with all Pokémon and for Pokémon with ID 35, replacing "normal" with "fairy"
const updatePokemon = pokemon.map((p) => {
  if (p.id === 35) {
    return { ...p, types: ["fairy"] };
  }
  return p;
});
console.log(updatePokemon);
=======
const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 35, name: "Clefairy", types: ["normal"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

//an array of pokémon objects where the id is evenly divisible by 3
const divisibleBy3 = pokemon.filter((p) => p.id % 3 === 0);
console.log(divisibleBy3);

//Array of Pokémon objects that are "fire" type
const fireType = pokemon.filter((p) => p.types.includes("fire"));
console.log(fireType);

//Array of Pokémon objects that have more than one type
const multiType = pokemon.filter((p) => p.types.length > 1);
console.log(multiType);

//Array with just the names of the Pokémon
const names = pokemon.map((p) => p.name);
console.log(names);

//Array with just the names of Pokémon with an ID greater than 99
const nameOver99 = pokemon.filter((p) => p.id > 99).map((p) => p.name);
console.log(nameOver99);

//Array with just the names of the Pokémon whose only type is poison
const poisonOnly = pokemon
  .filter((p) => p.types.length === 1 && p.types[0] === "poison")
  .map((p) => p.name);
console.log(poisonOnly);

//Array containing just the first type of all the Pokémon whose second type is "flying"
const firstFlyingType = pokemon
  .filter((p) => p.types[1] === "flying")
  .map((p) => p.types[0]);
console.log(firstFlyingType);

//Count of the number of Pokémon that are "normal" type
const normalType = pokemon.filter((p) => p.types.includes("normal")).length;
console.log(normalType);

//Array with all Pokémon except the Pokémon with the ID of 148
const without148 = pokemon.filter((p) => p.id !== 148);
console.log(without148);

//Array with all Pokémon and for Pokémon with ID 35, replacing "normal" with "fairy"
const updatePokemon = pokemon.map((p) => {
  if (p.id === 35) {
    return { ...p, types: ["fairy"] };
  }
  return p;
});
console.log(updatePokemon);
>>>>>>> 31aa72ce39c26c4d9435ad4e55ff7349dee2cef5
