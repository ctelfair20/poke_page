import { Box, Card } from '@mui/material';

interface Props {

}

const PokeCard = (props: Props) => {
  return (
    <Card
      elevation={5}
      className="background-by-type"
    >
      <Box className="pokemon-image">pokemon IMAGE goes here!</Box>
      <Box className="pokemon-name">pokemon NAME goes here!</Box>
      <Box className="description">pokemon DESCRIPTION goes here!</Box>
    </Card>
  );
};

export default PokeCard;
