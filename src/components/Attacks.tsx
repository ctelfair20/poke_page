import React, { useContext } from 'react';
import { Box, Card } from '@mui/material';
import { PokeContext } from '../pages/Pokepage/index'

interface Props {
}

const Actions = (props: Props) => {

  const pokemonInfo = useContext(PokeContext);

  return (
    <Box className="pokemon-actions">The pokemon ACTIONS go there!!</Box>
  );
}

export default Actions;