import { Card, Container, Box } from '@mui/material';
import Stats from "./Stats";
import Abilities from "./Abilities";
import Attacks from "./Attacks";

const PokeInfoCard = () => {
  return (
    <Card
      elevation={4}
      className="pokemon-info-card"
    >
      <Container className="pokemon-info-card">
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