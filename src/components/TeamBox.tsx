import { Tooltip } from '@mui/material';
import { Box } from "@mui/system";
import HelpIcon from '@mui/icons-material/Help';
import TeamCard from "./TeamCard";
import { pokeInterface } from '../pages/Pokepage/interface';

interface PropsI {
  favorited: Array<pokeInterface>
}

const TeamBox = ({ favorited }: PropsI) => {

  const generateTeam = () => {
    // if favorites is empty
    if (favorited.length === 0) {
      // display a placeholder '?' and tool tip
      return (
        <Tooltip
          title="favorite a pokemon to add it to your team"
          disableFocusListener
        >
          <HelpIcon />
        </Tooltip>
      )
    }
    // map over favorites
    const team = favorited.map((pokemon, i) => {
      // return a teamCard for each element passing the element to the card so that the card knows what to display
      return <TeamCard key={'Fav' + i} pokemon={pokemon} />
      //
    })
    // check if favorited is not full
    if (favorited.length !== 6) {
      team.push(
        <Tooltip
          key={'Fav?'}
          title="favorite a pokemon to add it to your team"
          disableFocusListener
        >
          <HelpIcon />
        </Tooltip>
      )
    }
    return team;
  }

  return (
    <Box
      className="team-box"
    >
      {generateTeam()}
    </Box >
  );
}

export default TeamBox;