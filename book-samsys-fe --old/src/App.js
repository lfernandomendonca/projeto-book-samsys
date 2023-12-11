import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Table } from "reactstrap";
import React, { useState } from "react";
import StrapModal from "./components/modal/modal.tsx";

function App() {
  const baseURL = "https://localhost:7011/livro";
  const [data, setData] = useState([]);
  // const [selectedBook, setSelectedBook] = useState({
  //   isbn: string = '' ,
  //   livroNome: string = '',
  //   preco: number = ''
  // })

  // const saveInput = e => {
  //   const {}
  // }

  const getRequest = async () => {
    try {
      const response = await axios.get(baseURL);
     
      const livroArray = response.data.obj.value;
      console.log(livroArray)

      if (Array.isArray(livroArray)) {
        setData(livroArray);
      } else {
        console.error(
          "A resposta do servidor não contém um array de livros:",
          livroArray
        );
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <h1>Book Samsys</h1>

      <StrapModal />
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
            {data.map((Livro,index) => (
              <tr key={index}>
                <td>{Livro.isbn}</td>
                <td>{Livro.livroNome}</td>
                <td>{Livro.preco}</td>
                <td>
                  <button>Editar</button>
                  <button>Excluir</button>
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
