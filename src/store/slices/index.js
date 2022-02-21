import { combineReducers } from "@reduxjs/toolkit";

import pokemonsSlices from "./pokemonsSlices";

const rootReducer = combineReducers({
  pokemons: pokemonsSlices,
});
export default rootReducer;
