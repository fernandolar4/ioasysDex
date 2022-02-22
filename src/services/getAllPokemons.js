import api from "./api";

const getAllPokemons = async () => {
  try {
    return api
      .get("/pokemon")
      .then((data) => {
        let results = data.data.results;
        let promisesArray = results.map((result) => {
          return api.get(result.url);
        });
        return Promise.all(promisesArray);
      })
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.error(error);
  }
};

export default getAllPokemons;
