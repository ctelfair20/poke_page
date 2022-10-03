import { Box, Card } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { PokeContext, PokeIdContext } from '../pages/Pokepage';

interface Props {

}

const PokeCard = (props: Props) => {

  const { name } = useContext(PokeContext);
  const pokeContext = useContext(PokeContext);
  const { id } = useContext(PokeIdContext);
  // const getPokemonName = () => {

  // }

  return (
    <Card
      elevation={5}
      className="background-by-type"
    >
      <Box className="pokemon-image">pokemon IMAGE goes here!</Box>
      <Box className="pokemon-name">pokemon {id} {name} {pokeContext?.abilities?.[0].ability.name} goes here!</Box>
      <Box className="description">pokemon DESCRIPTION goes here!</Box>
    </Card>
  );
};

export default PokeCard;
