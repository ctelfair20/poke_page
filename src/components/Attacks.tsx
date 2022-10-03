import React, { useContext } from 'react';
import { Box, Card } from '@mui/material';
import { PokeContext } from '../pages/Pokepage/index'

interface Props {
}

const Actions = (props: Props) => {

  const { moves } = useContext(PokeContext);

  const attacksMap = moves?.map((move, i) => {
    return <Box key={'atk' + i}>{move.move.name[0].toUpperCase() + move.move.name.slice(1)}</Box>
  })

  return (
    <Box className="pokemon-actions">Attacks: {attacksMap}</Box>
  );
}

export default Actions;