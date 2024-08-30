import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import AppRouter from "./router/AppRouter";

const endPointLocaisVotacao = `https://apps.tre-rj.jus.br/api-dados-abertos/locaisvotacao`;
const endPointZonas = `https://apps.tre-rj.jus.br/api-dados-abertos/zonas`;

function App() {
  useEffect(() => {
    const fetchAllLocaisVotacao = async () => {
      try {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        const result = await axios
          .get(endPointLocaisVotacao)
          .then((res) => res.data);
        console.log("Resultado: ", result);
        return;
      } catch (err) {
        console.error(err);
        console.log(
          "Não foi possível buscar os dados da API de locais de votação do TSE"
        );
      }
    };
    fetchAllLocaisVotacao();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
