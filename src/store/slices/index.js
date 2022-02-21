import { combineReducers } from "@reduxjs/toolkit";

import pokemonsSlices from "./pokemonsSlices";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
  pokemons: pokemonsSlices,
  themeSlice: themeSlice,
});
export default rootReducer;
