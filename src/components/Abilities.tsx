import { Box } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

interface Props {
}

const Abilities = (props: Props) => {

  const { abilities } = usePokeContext();
  // console.log('from abilities', pokemon)
  // const { abilities } = usePokeContext();

  const abilitesMap = abilities?.map((ability, i) => {
    return <Box key={'ab' + i}>{ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)}</Box>
  })

  return (
    <Box className="pokemon-abilities">Abilities: {abilitesMap}</Box>
  );
}

export default Abilities;