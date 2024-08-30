import { useState } from "react";
import { zonasApiMock } from "../mock/zonas";

const Update = () => {
  const [zona, setZona] = useState<any>(() => zonasApiMock);

  const handleUpdateZona = async () => {
    try {
      // todo
    } catch (err) {
      console.error(err);
      console.log(
        "Não foi possivel atualizar a zona eleitoral devido a um erro"
      );
    }
  };

  return (
    <>
      <h1>Atualizar zonas eleitorais</h1>
      <label htmlFor="numero">Numero: </label>
      <input
        name="numero"
        type="number"
        placeholder="Numero"
        onChange={handleUpdateZona}
      />
      <label htmlFor="endereco">Endereço: </label>
      <input
        name="endereco"
        type="text"
        placeholder="Endereço"
        onChange={handleUpdateZona}
      />
      <label htmlFor="bairro">Bairro: </label>
      <input
        name="bairro"
        type="text"
        placeholder="Bairro"
        onChange={handleUpdateZona}
      />
      <label htmlFor="cidade">Cidade: </label>
      <input
        name="cidade"
        type="text"
        placeholder="Cidade"
        onChange={handleUpdateZona}
      />
      <label htmlFor="email">Email: </label>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleUpdateZona}
      />
    </>
  );
};

export default Update;
