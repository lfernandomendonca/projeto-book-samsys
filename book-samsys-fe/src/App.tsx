import React, { useState, useEffect, ReactNode } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";

function App() {
  interface Livro {
    isbn: string;
    livroNome: string;
    preco: number;
  }

  const baseUrl: string = "https://localhost:7011";
  const getComplementUrl: string = "/livro";
  const [data, dataSet] = useState<Array<Livro>>([]);

  const getRequest = async () => {
    try {
      const response = await axios.get(baseUrl + getComplementUrl);
      const dataArray: any[] = response.data.obj.value;
      console.log(dataArray);

      if (Array.isArray(dataArray)) {
        dataSet(dataArray);
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
        <h1>Book Samsys</h1>

        <div className="row">
          <div className="col">
            <div className="btn btn-warning">Cadastrar livro</div>
          </div>
          <div className="col">
            <input type="search" placeholder="procurar ISBN" />
          </div>
        </div>
        <br />
      </div>
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
            {data.map((Livro, index) => (
              <tr key={index}>
                <td>{Livro.isbn}</td>
                <td>{Livro.livroNome}</td>
                <td>{Livro.preco}</td>
                <td>
                  <div className="btn btn-primary m-1">Editar</div>
                  <div className="btn btn-danger">Excluir</div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
