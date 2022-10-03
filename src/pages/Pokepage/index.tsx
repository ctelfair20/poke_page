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
  valid: initialPokeData,
}

export const PokeContext = createContext(pokeData.empty);
export const PokeIdContext = createContext(pokeData.empty);

const PokePage = () => {
  const [name, setName] = useState<'empty' | 'full'>('empty');
  const [id, setId] = useState<'empty' | 'valid'>('empty');
  const [abilities, setAbilities] = useState<'empty' | 'full'>('empty');

  const handleClick = () => {
    const data = name === 'empty' ? 'full' : 'empty';
    const newId = id === 'empty' ? 'valid' : 'empty';
    const abilitiesList = abilities === 'empty' ? 'full' : 'empty';
    setName(data);
    setId(newId);
    setAbilities(abilitiesList);
  }

  return (
    <PokeContext.Provider value={pokeData[name]}>
      <PokeIdContext.Provider value={pokeData[id]}>

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
      </PokeIdContext.Provider>
    </PokeContext.Provider >
  );
}

export default PokePage;