import { pokeInterface } from "./interface";

export const data: pokeInterface = {
  abilities: [
    {
      ability: {
        name: "limber"
      },
      "is_hidden": false
    }
  ],
  id: 5,
  name: "Ditto",
  moves: [
    {
      move: {
        name: "transform"
      }
    }
  ],
  sprites: {
    other: {
      "official-artwork": {
        "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
      }
    }
  },
  types: [
    {
      type: {
        name: "normal"
      }
    }
  ]
}