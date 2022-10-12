import { Box, Paper } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const PokeNameAndDescription = () => {
  // Typescript won't let me add these varibles together like normal strings -- add " || '' " to variables -- look for css  to do this easier
  const { id, name, types, height, weight } = usePokeContext();
  const typeFirstLetterCaps = types?.[0].type?.name?.[0].toUpperCase();
  const remainingLettersInName = name?.slice(1);
  const remainingLettersInType = types?.[0].type?.name?.slice(1);
  const nameFirstLetterCaps = name?.[0].toUpperCase();
  const possName = `${nameFirstLetterCaps}${remainingLettersInName}`

  // My attempt to make it so that name only displays the name of the pokemon with a caps first letter
  // const checkName = (piece: string | undefined) => {
  //   const nameFirstLetterCaps = name?.[0].toUpperCase();
  //   const possName = `${nameFirstLetterCaps}${remainingLettersInName}`

  //   piece = piece || '';
  //   if (piece.indexOf('-') >= 0) {
  //     const before = piece.slice(0, piece.indexOf('-'));
  //     const after = piece.slice(piece.indexOf('-') + 1);
  //     console.log('pp', piece, 'b', before, 'a', after)
  //     return `${nameFirstLetterCaps + before + after}`;
  //   } else {
  //     return possName;
  //   }
  // }

  return (
    <Box className='below-image'>
      <Paper elevation={3} className="pokemon-name">{possName}</Paper>
      <Paper elevation={3} className="pokemon-description">
        <span className='title'>Description:</span>
        <Box id='description'>
          Number: {id} Types: {`${typeFirstLetterCaps}${remainingLettersInType}`} Height: {height} Weight:{weight}
        </Box>
      </Paper>
    </Box>
  );
};

export default PokeNameAndDescription;