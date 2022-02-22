import api from "./api";

const getAllPokemons = (apiCall) => {
  let nextApiCall = "";
  try {
    return api
      .get(apiCall)
      .then((data) => {
        let results = data.data.results;
        let pokemons = results.map((result) => {
          return api.get(result.url);
        });
        nextApiCall = data.data.next;
        return Promise.all(pokemons);
      })
      .then((data) => {
        return { results: data, next: nextApiCall };
      });
  } catch (error) {
    console.error(error);
  }
};

export default getAllPokemons;
