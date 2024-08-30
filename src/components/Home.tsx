import axios from "axios";
import { useEffect, useState } from "react";
import { zonasApiMock } from "../mock/zonas";
import { locaisVotacaoApiMock } from "../mock/locaisVotacao";

const endPointLocaisVotacao = locaisVotacaoApiMock;
const endPointZonas = zonasApiMock;

const Home = () => {
  const [zonas, setZonas] = useState<any>(() => zonasApiMock);
  const [locaisVotacao, setLocaisVotacao] = useState<any>(
    () => locaisVotacaoApiMock
  );

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
      <h2>Zonas Eleitorais</h2>
      {zonas?.map((elem: any) => (
        <>
          <h5>Número: {elem.numero}</h5>
          <h5>Endereço: {elem.endereco}</h5>
          <h5>Bairro: {elem.bairro}</h5>
          <h5>Cidade: {elem.cidade}</h5>
          <h5>Email: {elem.email}</h5>
          <br />
        </>
      ))}
      <h2>Locais de Votação</h2>
      {locaisVotacao?.map((elem) => (
        <>
          <h5>Número: {elem.numero}</h5>
          <h5>Endereço: {elem.endereco}</h5>
          <h5>Bairro: {elem.bairro}</h5>
          <h5>Cidade: {elem.cidade}</h5>
          <h5>Email: {elem.email}</h5>
          <br />
        </>
      ))}
    </>
  );
};

export default Home;
