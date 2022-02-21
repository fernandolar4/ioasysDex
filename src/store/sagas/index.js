import { all } from "redux-saga/effects";

import pokemonsSaga from "./pokemonsSaga";

function* rootSaga() {
  yield all([pokemonsSaga()]);
}

export default rootSaga;
