import { Box } from "@mui/system";
import { useEffect } from "react";
import HelpIcon from '@mui/icons-material/Help';

interface PropsI {
  id: number
}

const TeamCard = ({ id }: PropsI) => {
  useEffect(() => {

  }, [])

  return (
    <Box
      className="team-member"
    >
      <HelpIcon />
    </Box>
  );
}

export default TeamCard;