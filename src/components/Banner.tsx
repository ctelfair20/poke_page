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

  useEffect(() => {
    if (liked) {
      setFavorited([...favorited, pokemon])
    }
  }, [liked])

  const handleClick = () => {
    setLiked(!liked)
  }

  const disableFavoriteBtn = () => {
    // if favorite is 5 or shorter and liked is true
    if (favorited.length <= 5 && liked) {
      // display full heart
      return <FavoriteIcon sx={{ color: red[500] }} onClick={handleClick} />
    } else if (favorited.length <= 5 && !liked) {
      // display empty heart
      return <FavoriteBorderIcon onClick={handleClick} />
      // if favorite is 6 or longer(should never get longer than 6)
    } else {
      // check if curent pokemon is in team
      if (favorited.includes(pokemon)) {
        // display clickable full heart
        return <FavoriteIcon sx={{ color: red[500] }} onClick={handleClick} />
        // else
      } else {
        // display heart in 'disabled' color and remove onClick
        return <FavoriteBorderIcon color="disabled" />
        //
      }
    }
  }

  return (
    <Box className="banner">
      <Typography
        sx={{ fontWeight: 'bold' }}
      >
        #{id}
      </Typography>
      {disableFavoriteBtn()}
      {/* {liked ? <FavoriteIcon sx={{ color: red[500] }} onClick={handleClick} /> : <FavoriteBorderIcon onClick={handleClick} />} */}
    </Box>
  );
}

export default Banner;