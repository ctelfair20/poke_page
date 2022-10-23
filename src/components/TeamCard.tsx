import { Box, Tooltip } from "@mui/material";
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
      <Tooltip
        title="favorite a pokemon to add it to your team"
        disableFocusListener
      >
        <HelpIcon />
      </Tooltip>
    </Box>
  );
}

export default TeamCard;