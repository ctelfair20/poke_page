import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { usePokeContext } from '../pages/Pokepage/PokeContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const Banner = () => {

  const [liked, setLiked] = useState(false);
  const { id } = usePokeContext();

  const handleClick = () => {
    setLiked(!liked)
  }

  return (
    <Box className="banner">
      <Typography
        sx={{ fontWeight: 'bold' }}
      >
        #{id}
      </Typography>
      {liked ? <FavoriteIcon sx={{ color: red[500] }} onClick={handleClick} /> : <FavoriteBorderIcon onClick={handleClick} />}
    </Box>
  );
}

export default Banner;