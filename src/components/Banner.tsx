import { useEffect, useState } from "react";
import { red } from '@mui/material/colors';
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePokeContext, usePokedexContext, useUpdatePokeContext } from '../pages/Pokepage/PokeContext';
import { pokeInterface } from "../pages/Pokepage/interface";

interface PropsI {
  setFavorited: (pokemon: pokeInterface[]) => void
  favorited: Array<pokeInterface>
  setLiked: (value: boolean) => void
  liked: boolean
}

const Banner = ({ favorited, setFavorited, liked, setLiked }: PropsI) => {

  const pokemon = usePokeContext();
  const { id } = usePokeContext();
  const pokedex = usePokedexContext();
  const setPokedex = useUpdatePokeContext();

  useEffect(() => {
    if (liked) {
      setFavorited([...favorited, pokemon])
    }
  }, [liked])

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