export interface pokeInterface {
  abilities?: abilitiesI[]; //!
  base_experience?: number;
  forms?: [];
  game_indices?: [];
  height?: number;
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: movesI[]; //!
  name?: string; //!
  order?: number;
  past_types?: [];
  species?: any;
  sprites?: spriteI; //!
  stats?: statsI[]; //!
  types?: typesI[]; //!
  weight?: number;
}

export interface abilitiesI {
  ability: {
    name: string
  }
  "is_hidden": boolean
}

export interface movesI {
  move: {
    name: string
  }
}

export interface spriteI {
  other: {
    "official-artwork": {
      "front-default": string
    }
  }
}

export interface statsI {
  'base-stat': number
  effort: number
  stat: {
    name: string
  }
}

export interface typesI {
  type: {
    name: string
  }
}
