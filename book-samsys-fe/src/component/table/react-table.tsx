import { Button, Table } from "reactstrap";
import Livro from "../../book Data/livro";
import useGetRequest from "../../hooks/axios-get-request";
import { useEffect } from "react";
import PutModal from "../modal/put-modal";

const ReactTable = () => {
  const { data, getRequest } = useGetRequest();

  useEffect(() => {
    getRequest();
  }, [data]);

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
                  <PutModal />{" "}
                  <Button color="danger">Excluir</Button>
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
