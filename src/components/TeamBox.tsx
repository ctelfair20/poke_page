import { Box } from "@mui/system";
import TeamCard from "./TeamCard";

interface PropsI {
  teamNumber: number
}

const TeamBox = ({ teamNumber }: PropsI) => {

  const generateTeam = () => {
    // loop from 1 tp 7
    // return an array of team cards with an id equal to the i
    let team: JSX.Element[] = [];
    for (let i = 1; i <= 7; i++) {
      team.push(<TeamCard id={i} key={`team-member-${i}`} teamNumber={teamNumber} />)
    }
    return team;
  }

  return (
    <Box
      className="team-box"
    >
      {generateTeam()}
    </Box>
  );
}

export default TeamBox;