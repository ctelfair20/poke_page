import { Box, Card } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { PokeContext } from '../pages/Pokepage';
import "../App.css"

interface Props {

}

const PokeCard = (props: Props) => {

  const { name, sprites, types, height, id, weight } = useContext(PokeContext);

  // const getPokemonName = () => {

  // }

  return (
    <Card
      elevation={5}
      className="background-by-type"
    >
      <Box className="pokemon-image-box">
        <img src={sprites?.other['official-artwork']['front-default']} alt={name} className="pokemon-image"></img>
      </Box>
      <Box className="pokemon-name">Name: {name} </Box>
      <Box className="pokemon-description">
        Description: Number: {id} Types:{types?.[0].type.name} Height: {height} Weight:{weight}
      </Box>
    </Card>
  );
};

export default PokeCard;
