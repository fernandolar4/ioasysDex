import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  pokemons: [],
  error: null,
};

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    GET_POKEMONS: (state) => ({ ...state, isLoading: true }),
    GET_POKEMONS_SUCCESS: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokemon: payload.data,
    }),
    GET_POKEMONS_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

const { actions, reducer } = pokemonsSlice;

export const { GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE } =
  actions;

export default reducer;
