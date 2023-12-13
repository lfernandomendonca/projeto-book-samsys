import { Table } from "reactstrap";
import Livro from "../../book Data/livro";
import Btn from "../button/btn";
import useGetRequest from "../../hooks/axios-get-request";
import { useEffect } from "react";


const ReactTable = () => {
  const { data, getRequest } = useGetRequest();

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
