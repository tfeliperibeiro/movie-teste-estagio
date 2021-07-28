const API_KEY = "63bf930a51875e0f6787ccacafe62dd3";
const BASE_URL = "https://api.themoviedb.org/3";

const getDataApi = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  const responseJson = response.json();
  return responseJson;
};

const filmData = {
  getListFilms: async () => [
    {
      title: "Ação",
      items: await getDataApi(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      title: "Comédia",
      items: await getDataApi(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      title: "Terror",
      items: await getDataApi(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      title: "Romance",
      items: await getDataApi(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      title: "Documentários",
      items: await getDataApi(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ],
};

export default filmData;
