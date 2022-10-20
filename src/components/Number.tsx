import { Box, Typography } from "@mui/material";
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const Number = () => {
  // should make new context
  const { id } = usePokeContext();

  return (
    <Box className="banner">
      <Typography
        sx={{ fontWeight: 'bold' }}
      >
        #{id}
      </Typography>
      <Box>heart icon</Box>
    </Box>
  );
}

export default Number;