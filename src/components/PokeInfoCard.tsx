import { Card, Container, Box } from '@mui/material';
import Stats from "./Stats";
import Abilities from "./Abilities";
import Attacks from "./Attacks";

const PokeInfoCard = () => {
  return (
    <Card
      elevation={5}
      className="pokemon-info-card"
    >
      <Container>
        <Box>
          <Abilities />
          <Stats />
          <Attacks />
        </Box>
      </Container>
    </Card>
  );
}

export default PokeInfoCard;