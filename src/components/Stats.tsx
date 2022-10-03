import React, { useContext } from 'react';
import { Box, Card } from '@mui/material';
import { PokeContext } from '../pages/Pokepage/index';

interface Props {
}

const Stats = (props: Props) => {

  const pokemonInfo = useContext(PokeContext)

  return (
    <Box className="pokemon-stats">The pokemon stats go there!!</Box>
  );
}

export default Stats;
