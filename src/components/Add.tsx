import React, { useState } from "react";
import { zonasApiMock } from "../mock/zonas";

const Add = () => {
  const [zona, setZona] = useState<any>(() => zonasApiMock);

  const addZona = async () => {};

  const handleZona = async (e: any) => {
    setZona((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log("zona: ", zona);
  };

  return (
    <>
      <h1>Adicionar zona eleitoral</h1>
      <label>Numero</label>
      <input
        type="number"
        name="numero"
        placeholder="Numero"
        onChange={handleZona}
      />
      <label>Endereço</label>
      <input
        type="text"
        name="endereco"
        placeholder="endereço"
        onChange={handleZona}
      />
      <label>Bairro</label>
      <input
        type="text"
        name="bairro"
        placeholder="bairro"
        onChange={handleZona}
      />
      <label>Cidade</label>
      <input
        type="text"
        name="cidade"
        placeholder="cidade"
        onChange={handleZona}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleZona}
      />
      <button className="btn-add" onClick={addZona}>
        Adicionar Zona
      </button>
    </>
  );
};

export default Add;
