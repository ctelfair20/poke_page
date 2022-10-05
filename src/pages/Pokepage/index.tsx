import { Box, Container, Grid, Typography } from "@mui/material";
import Abilities from "../../components/Abilities";
import Actions from "../../components/Attacks";
import PokeCard from "../../components/PokeCard";
import Pokeball from "../../components/Pokeball";
import Stats from "../../components/Stats";
import PokeProvider from "./PokeContext";

const PokePage = () => {

  return (
    <PokeProvider>
      <Box className="pokemon-page">
        <Typography>Pokemon Page</Typography>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box className="left-col">
              <PokeCard />
            </Box>
            <Box className="right-col">
              <Stats />
              <Abilities />
              <Actions />
              <Pokeball />
            </Box>
          </Grid>
        </Container>
      </Box>
    </PokeProvider>
  );
};

export default PokePage;