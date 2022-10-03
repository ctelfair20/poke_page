import React, { useContext } from 'react';
import { Box, Card } from '@mui/material';
import { statsI } from '../pages/Pokepage/interface'
import { PokeContext } from '../pages/Pokepage/index';

interface Props {
}

const Stats = (props: Props) => {

  const { stats } = useContext(PokeContext);

  // iterate over pokemon stats and display them
  // DON'T WRAP MAPPING FUNCTIONS! THINGS GET CONFUSING! -- ASK ROB
  const statsMap = stats?.map((stat, i) => {
    return <Box key={'st' + i}>{stat.stat.name}: {stat['base-stat']}</Box>;
  });

  return (
    <Box className="pokemon-stats">Stats:{statsMap}</Box>
  );
}

export default Stats;
