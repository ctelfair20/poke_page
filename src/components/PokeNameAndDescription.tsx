import { Container, Box } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const PokeNameAndDescription = () => {
  // Typescript won't let me add these varibles together like normal strings -- add " || '' " to variables -- look for css  to do this easier
  const { id, name, types, height, weight } = usePokeContext();
  const nameFirstLetterCaps = name?.[0].toUpperCase();
  const remainingLetterInName = name?.slice(1);
  const typeFirstLetterCaps = types?.[0].type?.name?.[0].toUpperCase();
  const remainingLetterInType = types?.[0].type?.name?.slice(1);

  return (
    <Container>
      <Box className="pokemon-name">Name: {`${nameFirstLetterCaps}${remainingLetterInName}`} </Box>
      <Box className="pokemon-description">
        Description: Number: {id} Types: {`${typeFirstLetterCaps}${remainingLetterInType}`} Height: {height} Weight: {weight}
      </Box>
    </Container>
  );
};

export default PokeNameAndDescription;