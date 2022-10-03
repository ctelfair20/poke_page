import { Box, Card } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { PokeContext, PokeIdContext } from '../pages/Pokepage';

interface Props {

}

const PokeCard = (props: Props) => {

  const { name, sprites, types, height, weight } = useContext(PokeContext);
  const { id } = useContext(PokeIdContext);
  // const getPokemonName = () => {

  // }

  return (
    <Card
      elevation={5}
      className="background-by-type"
    >
      <Box className="pokemon-image">
        <img src={sprites?.other['official-artwork']['front-default']} alt={name}></img>
      </Box>
      <Box className="pokemon-name">Name: {name} </Box>
      <Box className="pokemon-description">
        Description: Types:{types?.[0].type.name} Height: {height} Weight:{weight}
      </Box>
    </Card>
  );
};

export default PokeCard;
