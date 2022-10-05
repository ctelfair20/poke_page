import { Box } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const Abilities = () => {

  const { abilities } = usePokeContext();

  const abilitesMap = abilities?.map((ability, i) => {
    const id = 'ab' + i
    const abilityWithCapsFirstLetter = ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1);
    return <Box key={id}>{abilityWithCapsFirstLetter}</Box>
  });

  return (
    <Box className="pokemon-abilities">Abilities: {abilitesMap}</Box>
  );
};

export default Abilities;