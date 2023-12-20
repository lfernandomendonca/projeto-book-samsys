import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Delete from "../../services/Delete";
import Put from "../../services/Put";
import Get from "../../services/Get";
import Ddown from "../Ddown";
import PreviousNextBtn from "../PreviousNextBtn";
import "./livros-style.css";

interface LivrosProps {}

export default function Livros({}: LivrosProps): JSX.Element {
  const { data, getRequest, itemsPerPage, changePage } = Get();
  const [updateData, setUpdateData] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (updateData) {
      getRequest();
      setUpdateData(false);
    }
  }, [updateData]);

  const handleDropdownChange = (value: number) => {
    itemsPerPage(value);
    setUpdateData(true);
  };

  const goToNextPage = () => {
    changePage(currentPage + 1);
    setCurrentPage(currentPage + 1);
    setUpdateData(true);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
      setCurrentPage(currentPage - 1);
      setUpdateData(true);
    }
  };



  return (
    <>
      <Ddown onSelect={handleDropdownChange} />

      <div className="pagination-buttons">
      <PreviousNextBtn
  onPreviousClick={goToPreviousPage}
  onNextClick={goToNextPage}
  disabledPrevious={currentPage === 1}
  disabledNext={!data || data.length === 0}
  currentPage={currentPage}
  totalPages={Math.ceil((data.length as number) / itemsPerPage.length)}
/>


      </div>

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
          {data &&
            data.map((Livro, index) => (
              <tr key={index}>
                <td>{Livro.isbn}</td>
                <td>{Livro.livroNome}</td>
                <td>{Livro.preco}</td>
                <td>
                  <div className="btn-wrapper">
                    <Put isbn={Livro.isbn} updateData={setUpdateData} />
                    <div className="space-between"></div>
                    <Delete isbn={Livro.isbn} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
