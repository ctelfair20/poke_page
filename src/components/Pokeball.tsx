import { useEffect } from 'react';
import axios from 'axios';
import { pokeInterface } from '../pages/Pokepage/interface';
import { useUpdatePokeContext, usePokeContext, usePokedexContext, useUpdatePokedexContext } from '../pages/Pokepage/PokeContext';
import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface PropsI {
  setLiked: (value: boolean) => void
  favorited: Array<pokeInterface>
}

const Pokeball = (({ setLiked, favorited }: PropsI) => {

  const pokemonInfoSetter = useUpdatePokeContext();
  const pokemon = usePokeContext();
  const pokedex = usePokedexContext();
  const pokedexSetter = useUpdatePokedexContext();

  // How do I get rid of this error on the dependency array??
  useEffect(() => {
    // why is this firing twice?? -- my app is wrapped in react.strictMode https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
    const updatePokedexOnPageLoad = async () => {
      await fetchPokeInfo();
      // await pokedexSetter([pokemon])
    }
    updatePokedexOnPageLoad();
  }, []);

  useEffect(() => {
    // if current pokemon is in our team
    if (favorited.includes(pokemon)) {
      // set liked to be true
      setLiked(true)
    } else {
      // set liked to false
      setLiked(false)
    }
  }, [pokemon])


  // This is how you log your data. Use two useEffects! DO NOT: set and call the same data in one useEffect - This is mixing sync and async calls

  // useEffect(() => {
  //   console.log('pokedex', pokedex);
  // }, [pokedex]);

  const handleOnClick = async () => {
    // fetch random pokemon from pokeapi
    await fetchPokeInfo();
    console.log(pokemon, pokedex);
    // add new pokemon to collection of pokemon already seen(pokedex)
    // const pokedexCopy = pokedex.map(pokemon => { return { ...pokemon } })
    // pokedexCopy.push(pokemon)
    // console.log('poke!', pokemon, pokedex, pokedexCopy);
    // await pokedexSetter(pokedexCopy)
    // make sure favorite botton starts out false when looking at a new pokemon
    setLiked(false)
  };

  const handleFowardArrowClick = () => {
    // should go foward by one pokemon
    // find the index of current pokemon in pokedex
    const currentPIndex = pokedex.indexOf(pokemon)
    // access the pokemon after the current pokemon
    const next = pokedex[currentPIndex + 1]
    console.log(currentPIndex, next, pokedex);
    // if next is exist
    if (next) {
      // set pokemon to be next
      pokemonInfoSetter(next)
    }
  };

  const handleBackArrowClick = () => {
    // should go back by one pokemon
    // find the index of current pokemon in pokedex
    const currentPIndex = pokedex.indexOf(pokemon)
    // access the pokemon before the current pokemon
    const previ = pokedex[currentPIndex - 1]
    console.log(currentPIndex, previ, pokedex);
    // if previ is exist
    if (previ) {
      // set pokemon to be previ
      pokemonInfoSetter(previ)
    }
  };

  const fetchPokeInfo = async () => {
    const { data } = await axios.get<pokeInterface>(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`);
    // if pokemon has a length of zero AND pokedex has a length of one
    pokemonInfoSetter(data);
    pokedexSetter([...pokedex, data]);
  };

  const randomNumber = (): number => {
    return Math.floor(Math.random() * 905) + 1;
  };

  return (
    <>
      <Box className='arrow-box'>
        <ArrowBackIosNewIcon onClick={handleBackArrowClick} fontSize='large' />
        <ArrowForwardIosIcon onClick={handleFowardArrowClick} fontSize='large' />
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