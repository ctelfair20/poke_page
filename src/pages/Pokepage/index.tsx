import { Box, Container, Grid, Typography } from "@mui/material";
import Abilities from "../../components/Abilities";
import Attacks from "../../components/Attacks";
import PokeCard from "../../components/PokeCard";
import Pokeball from "../../components/Pokeball";
import Stats from "../../components/Stats";
import PokeProvider from "./PokeContext";

const PokePage = () => {

  return (
    <PokeProvider>
      <Box className="pokemon-page">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Pokemon Page
        </Typography>

        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid
              item
              className="left-col"
            >
              <PokeCard />
              <Grid item>
                <Pokeball />
              </Grid>
            </Grid>

            <Grid
              item
              className="right-col"
            >
              <Grid
                container
              >
                <Stats />
                <Abilities />
              </Grid>

              <Grid container direction='column'>
                <Attacks />
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </PokeProvider>
  );
};

export default PokePage;