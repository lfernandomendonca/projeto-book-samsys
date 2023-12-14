import React, { useEffect } from "react";
import { Table } from "reactstrap";
import Livro from "../../book Data";
import useGetRequest from "../../services/axios-get-request";
import PutModal from "../modal/put-modal";
import "./style.css";
import DeleteModal from "../modal/delete-modal";

export default function Livros() {
  const { data, getRequest } = useGetRequest();
  const { updateData, setUpdateData } = useGetRequest();

  useEffect(() => {
    if (updateData) {
      getRequest();
      setUpdateData(false);
    }
    console.log(getRequest());
  }, [updateData]);

  return (
    <>
      <div className="container">
        <Table hover responsive size="sm" striped className="table">
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
                  <div className="btn-wrapper">
                    <PutModal className="btn" />
                    <DeleteModal className="btn" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
