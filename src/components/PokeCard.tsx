import { Box, Card } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { PokeContext } from '../pages/Pokepage';

interface Props {

}

const PokeCard = (props: Props) => {

  const { name } = useContext(PokeContext)
  // const getPokemonName = () => {

  // }

  return (
    <Card
      elevation={5}
      className="background-by-type"
    >
      <Box className="pokemon-image">pokemon IMAGE goes here!</Box>
      <Box className="pokemon-name">pokemon {name} goes here!</Box>
      <Box className="description">pokemon DESCRIPTION goes here!</Box>
    </Card>
  );
};

export default PokeCard;
