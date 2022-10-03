import { Card } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import PokeImage from './PokeImage';
import PokeNameAndDescription from './PokeNameAndDescription';
import "../App.css"

interface Props {

}

const PokeCard = (props: Props) => {

  // const getPokemonName = () => {

  // }

  return (
    <Card
      elevation={5}
      className="background-by-type"
    >
      <PokeImage />
      <PokeNameAndDescription />
    </Card>
  );
};

export default PokeCard;
