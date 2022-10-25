import { Box, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import HelpIcon from '@mui/icons-material/Help';
import { usePokeContext } from '../pages/Pokepage/PokeContext';
import { usePokedexContext } from '../pages/Pokepage/PokeContext';
import { pokeInterface } from '../pages/Pokepage/interface';

// This component displays the mini art or official art for the current pokemon as a team memeber

interface PropsI {
  id: number
  teamNumber: number
  pokemon: pokeInterface
}

const TeamCard = ({ id, teamNumber, pokemon }: PropsI) => {

  // const pokedex = usePokedexContext();
  // const [matched, setMatch] = useState(false);
  // const { sprites, name } = usePokeContext();
  const pokemonName = pokemon.name
  const miniArt = pokemon.sprites?.front_default;
  const officialArt = pokemon.sprites?.other['official-artwork']['front_default'];

  // useEffect(() => {
  //   console.log(pokedex);

  // }, [])

  return (
    <Box
      className="team-member"
    >
      {
        // pokemon ?
        <img
          className="mini-art"
          src={miniArt ? miniArt : officialArt}
          alt={pokemonName}
        />
        // : <Tooltip
        //   title="favorite a pokemon to add it to your team"
        //   disableFocusListener
        // >
        //   <HelpIcon />
        // </Tooltip>
      }
    </Box>
  );
}

export default TeamCard;