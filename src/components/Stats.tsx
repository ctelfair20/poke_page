import { Box, Paper } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const Stats = () => {

  const { stats } = usePokeContext();

  // iterate over pokemon stats and display them
  // DON'T WRAP MAPPING FUNCTIONS! THINGS GET CONFUSING! -- ASK ROB
  const statsMap = stats?.map((stat, i) => {
    const StatWithCapsFirstLetter = stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1);
    const baseStat = stat['base_stat'];
    const id = 'st' + i

    return (
      <Box key={id}>
        {StatWithCapsFirstLetter}: {baseStat}
      </Box>
    )
  });

  return (
    <Paper
      elevation={3}
      className="pokemon-stats-paper"
    >
      <Box className="title">
        Stats:
      </Box>
      <Box className="pokemon-stats">
        {statsMap}
      </Box>
    </Paper>
  );
}

export default Stats;
