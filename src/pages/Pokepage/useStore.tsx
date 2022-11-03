import React, { useState, createContext, useContext } from 'react'
import { pokeInterface } from './interface';

const useStore = () => {
  const [pokemon, setPokemon] = useState<pokeInterface>({});
  const [pokedex, setPokedex] = useState<pokeInterface[]>([]);
  const [favorited, setFavorited] = useState(Array<pokeInterface>);
  const [liked, setLiked] = useState(false);

  return {
    // maybe return as tuples to destructure later?
    pokemon: [pokemon, setPokemon],
    pokedex: [pokedex, setPokedex],
    favorited: [favorited, setFavorited],
    liked: [liked, setLiked],
  }
}

// tells the component what its props should look like
interface PropsI {
  // This component only receives one prop -- an array of children
  children: JSX.Element | JSX.Element[]
};

type InitialContextI = {
  pokemon?: (pokeInterface | React.Dispatch<React.SetStateAction<pokeInterface>>)[],
  pokedex?: (pokeInterface[] | React.Dispatch<React.SetStateAction<pokeInterface[]>>)[],
  favorited?: (pokeInterface[] | React.Dispatch<React.SetStateAction<pokeInterface[]>>)[],
  liked?: (boolean | React.Dispatch<React.SetStateAction<boolean>>)[]
}
const StoreContext = createContext<InitialContextI>({});

// custom hooks
export const usePokemon = () => useContext(StoreContext).pokemon;
export const usePokedex = () => useContext(StoreContext).pokedex;
export const useFavorited = () => useContext(StoreContext).favorited;
export const useLiked = () => useContext(StoreContext).liked;

export const StoreContextProvider = ({ children }: PropsI) => {
  <StoreContext.Provider value={useStore()}>
    {children}
  </StoreContext.Provider>
}

