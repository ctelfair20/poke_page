import { Box, Typography } from "@mui/material";
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const Number = () => {
  const { id } = usePokeContext();

  return (
    // <Box className="pokemon-number">
    <Typography
      className="pokemon-number"
    >
      #{id}
    </Typography>
    // {/* </Box> */ }
  );
}

export default Number;