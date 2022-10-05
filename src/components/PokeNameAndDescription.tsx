import { Container, Box } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const PokeNameAndDescription = () => {

  const { id, name, types, height, weight } = usePokeContext();

  return (
    <Container>
      <Box className="pokemon-name">Name: {name} </Box>
      <Box className="pokemon-description">
        Description: Number: {id} Types:{types?.[0].type.name} Height: {height} Weight:{weight}
      </Box>
    </Container>
  );
};

export default PokeNameAndDescription;