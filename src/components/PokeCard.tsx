import { Card, Container, Box } from '@mui/material';
import { pokeInterface } from '../pages/Pokepage/interface';
import Banner from './Banner';
// import CircularProgress from '@mui/material/CircularProgress';
import PokeImage from './PokeImage';
import PokeNameAndDescription from './PokeNameAndDescription';

interface PropsI {
  setFavorited: (pokemon: pokeInterface[]) => void
  favorited: Array<pokeInterface>
  setLiked: (value: boolean) => void
  liked: boolean
}

const PokeCard = ({ favorited, setFavorited, liked, setLiked }: PropsI) => {

  return (
    <Card
      elevation={4}
      className="pokemon-card"
    >
      <Container className="pokemon-card-container">
        <Banner favorited={favorited} setFavorited={setFavorited} liked={liked} setLiked={setLiked} />
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
