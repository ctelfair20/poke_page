import { Typography, Tooltip } from '@mui/material';
import { Box } from "@mui/system";
import HelpIcon from '@mui/icons-material/Help';
import TeamCard from "./TeamCard";
import { pokeInterface } from '../pages/Pokepage/interface';

interface PropsI {
  teamNumber: number
  favorited: Array<pokeInterface>
}

const TeamBox = ({ teamNumber, favorited }: PropsI) => {

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
    //
    // map over favorites
    // return a teamCard for each element passing the element to the card so that thr card knows what to display
    //
    // check if
  }

  return (
    <>
      <Typography
        variant='h5'
        align='center'
        color='darkblue'
        gutterBottom
      >
        Build Yout Team!
      </Typography>
      <Box
        className="team-box"
      >
        {generateTeam()}
      </Box >
    </>
  );
}

export default TeamBox;