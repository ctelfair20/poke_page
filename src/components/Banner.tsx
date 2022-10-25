import { useEffect, useState } from "react";
import { red } from '@mui/material/colors';
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePokeContext, usePokedexContext, useUpdatePokeContext } from '../pages/Pokepage/PokeContext';
import { pokeInterface } from "../pages/Pokepage/interface";

interface PropsI {
  setTeamNumber: (value: number) => void
  teamNumber: number
  setFavorited: (pokemon: pokeInterface[]) => void
  favorited: Array<pokeInterface>
}

const Banner = ({ setTeamNumber, teamNumber, favorited, setFavorited }: PropsI) => {

  const [liked, setLiked] = useState(false);
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