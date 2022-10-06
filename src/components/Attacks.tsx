import { Box } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const Actions = () => {

  const { moves } = usePokeContext();

  const attacksMap = moves?.map((move, i) => {
    const id = 'atk' + i;
    const atkWithCapsFirstLetter = move.move.name[0].toUpperCase() + move.move.name.slice(1);
    return <Box key={id}>{atkWithCapsFirstLetter}</Box>
  })

  return (
    <Box className="pokemon-attacks">Attacks: {attacksMap}</Box>
  );
};

export default Actions;