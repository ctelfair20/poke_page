import { createContext, useState } from 'react';
import { pokeInterface } from './interface';

// tells the component what its props should look like
interface Props {
  // This component only receives one prop -- an array of children
  children: JSX.Element | JSX.Element[]
};

// const emptyData: pokeInterface = {};

// This context holds the data retrieved from the api -- not sure why i don't have to tell the code that is empty obj is of type pokeInterface
export const PokeContext = createContext({});
// This context holds the function needed to update the data from the api
// "pokemon" is the input variable for the setter. Remember to set the variable's type based on the state it is trying to replace
export const UpdatePokeContext = createContext((pokemon: pokeInterface) => { });

const PokeProvider = ({ children }: Props) => {

  // const [status, setStatus] = useState<'empty' | 'full'>('empty');
  const [pokemon, setPokemon] = useState<pokeInterface>({});

  return (
    <PokeContext.Provider value={pokemon}>
      <UpdatePokeContext.Provider value={setPokemon}>
        {children}{/* These children are all the child comps to be wrapped in these providers  */}
      </UpdatePokeContext.Provider>
    </PokeContext.Provider>
  );
}

export default PokeProvider;