import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Delete from "../Delete";
import Put from "../Put";
import Get from "../Get";
import "./livros-style.css";

export default function Livros() {
  const { data, getRequest } = Get();
  const [updateData, setUpdateData] = useState(true);

  useEffect(() => {
    if (updateData) {
      getRequest();
      setUpdateData(false);
    }
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
            {data.map((Livro, index) => (
              <tr key={index}>
                <td>{Livro.isbn}</td>
                <td>{Livro.livroNome}</td>
                <td>{Livro.preco}</td>
                <td>
                  <div className="btn-wrapper">
                    <Put isbn={Livro.isbn} updateData={setUpdateData} />
                    <Delete isbn={Livro.isbn} />
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
