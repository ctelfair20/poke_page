import { Container, Box } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const PokeNameAndDescription = () => {

  const { id, name, types, height, weight } = usePokeContext();
  const typeName = types?.[0].type.name;
  // types?.[0].type.name[0] + types?.[0].type.name.split('')slice(1)
  return (
    <Container>
      <Box className="pokemon-name">Name: {name} </Box>
      <Box className="pokemon-description">
        Description: Number: {id} Types:{typeName} Height: {height} Weight:{weight}
      </Box>
    </Container>
  );
};

export default PokeNameAndDescription;