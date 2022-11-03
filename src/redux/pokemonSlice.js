import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import pokeInterface from "../pages/Pokepage/interface.tsx"

// export interface PokemonState {
//   value: number
// }

const initialState: pokeInterface = {
  pokemon: { names: 'Whatever' },
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    setPokemon: (state, action: PayloadAction<pokeInterface>) => {
      state.pokemon = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer