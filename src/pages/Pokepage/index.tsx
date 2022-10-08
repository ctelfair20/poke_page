import { Box, Container, Grid, Typography } from "@mui/material";
import PokeProvider from "./PokeContext";
import PokeCard from "../../components/PokeCard";
import Stats from "../../components/Stats";
import Abilities from "../../components/Abilities";
import Attacks from "../../components/Attacks";
import Pokeball from "../../components/Pokeball";

const PokePage = () => {

  return (
    <PokeProvider>
      <Box className="pokemon-page">
        {/* https://1000logos.net/wp-content/uploads/2017/05/Symbol-Pokemon-Logo.jpg -- black logo*/}
        <Box id="logo-box">
          <img id="logo" src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-logo.jpg"
            alt="pokemon-logo" />
        </Box>
        <Container>

          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {/* This grid item holds the pokemon's image, name and basic info */}
            <Grid
              item
              className="left-col"
            >
              <PokeCard />
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
        <Box className="pokeball-box">
          <Pokeball />
        </Box>
      </Box>
    </PokeProvider>
  );
};

export default PokePage;