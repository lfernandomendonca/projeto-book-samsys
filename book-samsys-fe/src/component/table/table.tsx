import { Table } from "reactstrap";
import Livro from "../../book Data/livro";

import Btn from "../button/btn";
import axios from "axios";
import { useState, useEffect } from "react";

const ReactTable = () => {
  const [data, setData] = useState<Array<Livro>>([]);

  const getRequest = async () => {
    try {
      const response = await axios.get("https://localhost:7011/livro");
      const dataArray: any[] = response.data.obj.value;

      if (Array.isArray(dataArray)) {
        setData(dataArray);
      } else {
        console.error("Não há array de livros.", dataArray);
      }
    } catch (error) {
      console.error("Erro ao realizar a requisição.", error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <div className="container">
        <Table hover responsive size="sm" striped>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Nome da Obra</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((Livro: Livro, index: any) => (
              <tr key={index}>
                <td>{Livro.isbn}</td>
                <td>{Livro.livroNome}</td>
                <td>{Livro.preco}</td>
                <td>
                  <Btn color="primary" text="Editar" size="" />
                  <Btn color="danger" text="Excluir" size="" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default ReactTable;
