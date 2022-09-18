import { Box, Container, Grid, Typography } from "@mui/material";
import Abilities from "../../components/Abilities";
import Actions from "../../components/Attacks";
import PokeCard from "../../components/PokeCard";
import Pokeball from "../../components/Pokeball";
import Stats from "../../components/Stats";

const PokePage = () => {

    return (
        <Box className="App">
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
                <Box className="rigth-col">
                <Stats />
                <Abilities />
                <Actions />
                <Pokeball />
                </Box>
            </Grid>
          </Container>
        </Box>
      );
}

export default PokePage;