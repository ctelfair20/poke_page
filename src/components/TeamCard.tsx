import { Box, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import HelpIcon from '@mui/icons-material/Help';
import { usePokedexContext } from '../pages/Pokepage/PokeContext';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

interface PropsI {
  id: number
  teamNumber: number
}

const TeamCard = ({ id, teamNumber }: PropsI) => {

  const pokedex = usePokedexContext();
  const [matched, setMatch] = useState(false);
  const { sprites, name } = usePokeContext();
  const miniArt = sprites?.front_default;
  const officialArt = sprites?.other['official-artwork']['front_default'];

  useEffect(() => {
    if (id === teamNumber) {
      setMatch(true)
    }
  }, [teamNumber])

  return (
    <Box
      className="team-member"
    >
      {/* <Tooltip
        title="favorite a pokemon to add it to your team"
        disableFocusListener
      > */}
      {matched ? <img className="mini-art" src={miniArt ? miniArt : officialArt} alt={name} /> : <HelpIcon />}
      {/* </Tooltip> */}
    </Box>
  );
}

export default TeamCard;