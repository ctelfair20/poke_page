import { Card, Container, Box } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import PokeImage from './PokeImage';
import PokeNameAndDescription from './PokeNameAndDescription';
import "../App.css"

const PokeCard = () => {

  return (
    <Card
      elevation={5}
      className="pokemon-card"
    >
      <Container>
        <Box className='pokemon-image-description-box'>
          <PokeImage />
          <PokeNameAndDescription />
        </Box>
      </Container>
    </Card>
  );
};

export default PokeCard;
