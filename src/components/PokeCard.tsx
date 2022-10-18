import { Card, Container, Box } from '@mui/material';
import Number from './Number';
// import CircularProgress from '@mui/material/CircularProgress';
import PokeImage from './PokeImage';
import PokeNameAndDescription from './PokeNameAndDescription';

const PokeCard = () => {

  return (
    <Card
      elevation={4}
      className="pokemon-card"
    >
      <Container>
        <Number />
        <Box className='pokemon-image-description-box'>
          <PokeImage />
          <PokeNameAndDescription />
        </Box>
      </Container>
    </Card>
  );
};

export default PokeCard;
