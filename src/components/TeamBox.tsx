import { Typography } from '@mui/material';
import { Box } from "@mui/system";
import TeamCard from "./TeamCard";
import { pokeInterface } from '../pages/Pokepage/interface';

interface PropsI {
  teamNumber: number
  favorited: Array<pokeInterface>
}

const TeamBox = ({ teamNumber, favorited }: PropsI) => {

  const generateTeam = () => {
    // if favorites is empty
    //   display a placeholder '?' and tool tip
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
        {/* {generateTeam()} */}
      </Box >
    </>
  );
}

export default TeamBox;