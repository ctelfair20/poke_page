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
  height: 3,
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
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
      }
    }
  },
  stats: [
    {
      'base-stat': 48,
      effort: 1,
      stat: {
        name: "hp"
      }
    },
    {
      'base-stat': 48,
      effort: 0,
      stat: {
        name: "attack"
      }
    },
    {
      'base-stat': 48,
      effort: 0,
      stat: {
        name: "defense"
      }
    },
    {
      'base-stat': 48,
      effort: 0,
      stat: {
        name: "special-attack"
      }
    },
    {
      'base-stat': 48,
      effort: 0,
      stat: {
        name: "special-defense"
      }
    },
    {
      'base-stat': 48,
      effort: 0,
      stat: {
        name: "speed"
      }
    }
  ],
  types: [
    {
      type: {
        name: "normal"
      }
    }
  ],
  weight: 40
}