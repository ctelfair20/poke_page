import React, { useContext } from 'react';
import { Box, Card } from '@mui/material';
import { PokeContext } from '../pages/Pokepage/index'

interface Props {
}

const Abilities = (props: Props) => {

  const { abilities } = useContext(PokeContext);

  const abilitesMap = abilities?.map((ability, i) => {
    return <Box key={'ab' + i}>{ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)}</Box>
  })

  return (
    <Box className="pokemon-abilities">Abilities: {abilitesMap}</Box>
  );
}

export default Abilities;