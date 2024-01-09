import axios from "axios";

const api = axios.create({
  baseURL: "https://bolao.maxmat1.com.br",
});

//Consulta resultados
const resultsFootball = (client) => {
  return api.get("/resultados", client);
};

export default {
  resultsFootball: resultsFootball,
};
