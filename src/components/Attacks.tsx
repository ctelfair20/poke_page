import { Box } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const Actions = () => {

  const { moves } = usePokeContext();

  const attacksMap = moves?.map((move, i) => {
    return <Box key={'atk' + i}>{move.move.name[0].toUpperCase() + move.move.name.slice(1)}</Box>
  })

  return (
    <Box className="pokemon-actions">Attacks: {attacksMap}</Box>
  );
}

export default Actions;