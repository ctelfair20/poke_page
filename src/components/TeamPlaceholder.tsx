import { Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const TeamPlaceholder = () => {
  return (
    <Tooltip
      title="favorite a pokemon to add it to your team"
      disableFocusListener
    >
      <HelpIcon />
    </Tooltip>
  )
}

export default TeamPlaceholder;