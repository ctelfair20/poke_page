import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PokeProvider from "./PokeContext";
import PokeCard from "../../components/PokeCard";
import Pokeball from "../../components/Pokeball";
import PokeInfoCard from "../../components/PokeInfoCard";

const PokePage = () => {

  return (
    <PokeProvider>
      <Box className="pokemon-page">
        {/* https://1000logos.net/wp-content/uploads/2017/05/Symbol-Pokemon-Logo.jpg -- black logo*/}
        <Box id="logo-box">
          <img id="logo" src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-logo.jpg"
            alt="pokemon-logo" />
        </Box>

        <Container className="container">
          <Grid
            container
            justifyContent="space-evenly"
            alignItems="center"
            rowSpacing={2}
            columnSpacing={1}
          >
            {/* This grid item holds the pokemon's image, name and basic info */}
            <Grid
              item
              sm={4}
              md={4}
              lg={5}
            >
              <PokeCard />
            </Grid>

            {/* This grid item holds the pokeball button*/}
            <Grid
              item
              sm={1}
              md={1}
              lg={2}
              justifyContent="center"
            >
              <Box className="pokeball-box">
                <Pokeball />
                {/* <Button variant="contained" color="primary">hi</Button> */}
              </Box>
            </Grid>

            {/* This grid item holds the pokemon's advance info*/}
            <Grid
              item
              sm={4}
              md={4}
              lg={5}
            >
              <PokeInfoCard />
              {/* <Grid
                container
              >
                <Stats />
                <Abilities />
              </Grid>

              <Grid container direction='column'>
                <Attacks />
              </Grid> */}
            </Grid>
          </Grid>
        </Container>

      </Box>
    </PokeProvider>
  );
};

export default PokePage;