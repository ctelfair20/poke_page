import React, { useContext } from 'react';
import { Box, Card } from '@mui/material';
import { PokeContext } from '../pages/Pokepage/index'

interface Props {
}

const Abilities = (props: Props) => {

  const pokemonInfo = useContext(PokeContext);

  return (
    <Box className="pokemon-abilities">The pokemon ABILITIES go there!!</Box>
  );
}

export default Abilities;