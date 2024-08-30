import axios from "axios";
import { useEffect } from "react";
import { zonasApiMock } from "../mock/zonas";
import { locaisVotacaoApiMock } from "../mock/locaisVotacao";

const endPointLocaisVotacao = locaisVotacaoApiMock;
const endPointZonas = zonasApiMock;

const Home = () => {
  useEffect(() => {
    const fetchLocaisVotacao = async () => {
      try {
        console.log("Apis mockadas locais votação: ", endPointLocaisVotacao);
        console.log("Apis mockadas zonas eleitorais: ", endPointZonas);
      } catch (err) {
        console.error(err);
        console.log("Não foi possível buscar os locais de votação na API");
      }
    };
    fetchLocaisVotacao();
  }, []);

  return (
    <>
      <h1>TSE App | Eleições Municipais 2024</h1>
    </>
  );
};

export default Home;
