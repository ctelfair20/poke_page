import { Card, Container, Box } from '@mui/material';
import { pokeInterface } from '../pages/Pokepage/interface';
import Banner from './Banner';
// import CircularProgress from '@mui/material/CircularProgress';
import PokeImage from './PokeImage';
import PokeNameAndDescription from './PokeNameAndDescription';

interface PropsI {
  setTeamNumber: (value: number) => void
  teamNumber: number
  setFavorited: (pokemon: pokeInterface[]) => void
  favorited: Array<pokeInterface>
}

const PokeCard = ({ setTeamNumber, teamNumber, favorited, setFavorited }: PropsI) => {

  return (
    <Card
      elevation={4}
      className="pokemon-card"
    >
      <Container className="pokemon-card-container">
        <Banner setTeamNumber={setTeamNumber} teamNumber={teamNumber} favorited={favorited} setFavorited={setFavorited} />
        <Box className='pokemon-image-description-box'>
          {/* <Banner /> */}
          <PokeImage />
          <PokeNameAndDescription />
        </Box>
      </Container>
    </Card>
  );
};

export default PokeCard;
