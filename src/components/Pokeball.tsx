import { useEffect } from 'react';
import axios from 'axios';
import { pokeInterface } from '../pages/Pokepage/interface';
import { useUpdatePokeContext } from '../pages/Pokepage/PokeContext';

const Pokeball = () => {

  const pokemonInfoSetter = useUpdatePokeContext();

  // How do I get rid of this error on the dependency array?? -- asked Rob -- its a mystery
  useEffect(() => {
    // why is this firing twice?? -- my app is wrapped in react.strictMode https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
    fetchPokeInfo();
  }, []);

  // This is how you log your data. Use two useEffects! DO NOT: set and call the same data in one useEffect - This is mixing sync and async calls

  // useEffect(() => {
  //   console.log('infodddd', pokemon)
  // }, [pokemon]);

  const handleOnClick = async () => {
    fetchPokeInfo();
  };

  const fetchPokeInfo = async () => {
    const { data } = await axios.get<pokeInterface>(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`);
    pokemonInfoSetter(data);
  };

  const randomNumber = (): number => {
    return Math.floor(Math.random() * 905) + 1;
  };

  return (
    <button className="pokeball-button" onClick={handleOnClick}>choose your pokemon!</button>
  );
};

export default Pokeball;