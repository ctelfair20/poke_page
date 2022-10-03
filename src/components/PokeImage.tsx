import { useContext } from 'react'
import { PokeContext } from '../pages/Pokepage';
import { Container } from '@mui/material';

const PokeImage = () => {

  const { sprites, name } = useContext(PokeContext)
  return (
    <Container className="pokemon-image-box">
      <img src={sprites?.other['official-artwork']['front-default']} alt={name} className="pokemon-image" />
    </Container>
  );
}

export default PokeImage;