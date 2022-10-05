import { usePokeContext } from '../pages/Pokepage/PokeContext';
import { Container } from '@mui/material';

const PokeImage = () => {

  const { sprites, name } = usePokeContext();
  const frontArtwork = sprites?.other['official-artwork']['front_default'];

  return (
    <Container className="pokemon-image-box">
      <img src={frontArtwork} alt={name} className="pokemon-image" />
    </Container>
  );
}

export default PokeImage;