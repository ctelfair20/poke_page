import { Box } from '@mui/material';
import Stats from "./Stats";
import Abilities from "./Abilities";
import Attacks from "./Attacks";

const PokeInfoCard = () => {

  return (
    <Box className="pokemon-info-box">
      <Abilities />
      <Stats />
      <Attacks />
    </Box>
  );
}

export default PokeInfoCard;