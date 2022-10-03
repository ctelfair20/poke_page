import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Abilities from "../../components/Abilities";
import Actions from "../../components/Attacks";
import PokeCard from "../../components/PokeCard";
import Pokeball from "../../components/Pokeball";
import Stats from "../../components/Stats";
import { createContext, useState } from "react";
import { data as initialPokeData } from "./contextData";
import { pokeInterface } from "./interface";

const emptyData: pokeInterface = {};

const pokeData = {
  empty: emptyData,
  full: initialPokeData,
}

export const PokeContext = createContext(pokeData.empty);

const PokePage = () => {
  const [status, setStatus] = useState<'empty' | 'full'>('empty');

  const handleClick = () => {
    const data = status === 'empty' ? 'full' : 'empty';
    setStatus(data);
  }

  return (
    <PokeContext.Provider value={pokeData[status]}>
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
            <Box className="rigth-col">
              <Stats />
              <Abilities />
              <Actions />
              <Pokeball />
              <Button onClick={handleClick}>Poke</Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    </PokeContext.Provider >
  );
}

export default PokePage;