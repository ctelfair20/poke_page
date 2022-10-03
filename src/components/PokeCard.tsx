import { Box, Card, Container } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { PokeContext } from '../pages/Pokepage';
import PokeImage from './PokeImage';
import "../App.css"

interface Props {

}

const PokeCard = (props: Props) => {

  const { name, types, height, id, weight } = useContext(PokeContext);

  // const getPokemonName = () => {

  // }

  return (
    <Card
      elevation={5}
      className="background-by-type"
    >
      <PokeImage />
      <Container className="pokemon-name">Name: {name} </Container>
      <Container className="pokemon-description">
        Description: Number: {id} Types:{types?.[0].type.name} Height: {height} Weight:{weight}
      </Container>
    </Card>
  );
};

export default PokeCard;
