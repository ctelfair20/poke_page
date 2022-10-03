import React, { useContext } from 'react';
import { PokeContext } from '../pages/Pokepage/index';
import { Container, Box } from '@mui/material';

const PokeNameAndDescription = () => {

  const { name, id, types, height, weight } = useContext(PokeContext);

  return (
    <Container>
      <Box className="pokemon-name">Name: {name}</Box>
      <Box className="pokemon-description">
        Description: Number: {id} Types:{types?.[0].type.name} Height: {height} Weight:{weight}
      </Box>
    </Container>
  );
}

export default PokeNameAndDescription;