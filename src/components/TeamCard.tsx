import { Box } from "@mui/material";
import { pokeInterface } from '../pages/Pokepage/interface';

// This component displays the mini art or official art for the current pokemon as a team memeber
interface PropsI {
  pokemon: pokeInterface
}

const TeamCard = ({ pokemon }: PropsI) => {

  const pokemonName = pokemon.name
  const miniArt = pokemon.sprites?.front_default;
  const officialArt = pokemon.sprites?.other['official-artwork']['front_default'];

  return (
    <Box
      className="team-member"
    >
      {
        <img
          className="mini-art"
          src={miniArt ? miniArt : officialArt}
          alt={pokemonName}
        />
      }
    </Box>
  );
}

export default TeamCard;