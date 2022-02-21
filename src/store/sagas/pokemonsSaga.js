import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from "../slices/pokemonsSlices";

import api from "../../services/api";

function* getPokemons({ payload: { page } }) {
  try {
    const {
      data: { data, totalPages },
    } = yield call(api.get, `pokemon?limit=100&offset=200`);

    yield put(GET_POKEMONS_SUCCESS({ data, totalPages }));
  } catch (error) {
    yield put(GET_POKEMONS_FAILURE(error));
  }
}

export default function* watcher() {
  yield takeEvery(GET_POKEMONS, getPokemons);
}
