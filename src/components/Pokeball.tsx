import { useEffect } from 'react';
import axios from 'axios';
import { pokeInterface } from '../pages/Pokepage/interface';
import { useUpdatePokeContext, usePokeContext, usePokedexContext, useUpdatePokedexContext } from '../pages/Pokepage/PokeContext';
import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface PropsI {
  liked: boolean
  setLiked: (value: boolean) => void
}

const Pokeball = (({ liked, setLiked }: PropsI) => {

  const pokemonInfoSetter = useUpdatePokeContext();
  const pokemon = usePokeContext();
  const pokedex = usePokedexContext();
  const pokedexSetter = useUpdatePokedexContext();

  // How do I get rid of this error on the dependency array??
  useEffect(() => {
    // why is this firing twice?? -- my app is wrapped in react.strictMode https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
    const updatePokedexOnPageLoad = async () => {
      await fetchPokeInfo();
      await pokedexSetter([pokemon])
    }
    updatePokedexOnPageLoad();
  }, []);

  // useEffect(() => {
  // const pokedexCopy = pokedex.map((pokemon) => {
  //   return pokemon
  // })
  // console.log('copy1', pokedexCopy);
  // pokedexCopy.push(pokemon)
  // console.log('copy2', pokedexCopy);
  //   pokedexSetter([pokemon])
  // }, []);

  // This is how you log your data. Use two useEffects! DO NOT: set and call the same data in one useEffect - This is mixing sync and async calls

  // useEffect(() => {
  //   console.log('pokedex', pokedex);
  // }, [pokedex]);

  const handleOnClick = async () => {
    // fetch random pokemon from pokeapi
    await fetchPokeInfo();
    // add new pokemon to collection of pokemon already seen(pokedex)
    const pokedexCopy = pokedex.map(pokemon => { return { ...pokemon } })
    pokedexCopy.push(pokemon)
    await pokedexSetter(pokedexCopy)
    // make sure favorite botton starts out false when looking at a new pokemon
    setLiked(false)
  };

  const handleFowardArrowClick = () => {
    // should go foward by one pokemon
  };

  const handleBackArrowClick = () => {
    // should go back by one pokemon
  };

  const fetchPokeInfo = async () => {
    const { data } = await axios.get<pokeInterface>(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`);
    await pokemonInfoSetter(data);
  };

  const randomNumber = (): number => {
    return Math.floor(Math.random() * 905) + 1;
  };

  return (
    <>
      <Box className='arrow-box'>
        <ArrowBackIosNewIcon fontSize='large' />
        <ArrowForwardIosIcon fontSize='large' />
      </Box>
      <button className="pokeball-button" onClick={handleOnClick}>
        <Box className='outter-circle'>
          <Box className='red-half'></Box>
          <Box className='white-half'>
            <Box className='middle-circle'>
              <Box className='inner-circle'></Box>
            </Box>
          </Box>
        </Box>
      </button>
    </>
  );
});

export default Pokeball;