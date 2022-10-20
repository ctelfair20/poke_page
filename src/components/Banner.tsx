import { Box, Typography } from "@mui/material";
import { usePokeContext } from '../pages/Pokepage/PokeContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Banner = () => {
  // should make new context
  const { id } = usePokeContext();

  return (
    <Box className="banner">
      <Typography
        sx={{ fontWeight: 'bold' }}
      >
        #{id}
      </Typography>
      <Box><FavoriteBorderIcon /></Box>
    </Box>
  );
}

export default Banner;