import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Delete from "../../services/Delete";
import Put from "../../services/Put";
import Get from "../../services/Get";
import Ddown from "../Ddown";
import PreviousNextBtn from "../PreviousNextBtn";
import "./livros-style.css";
import Search from "../../services/Search";
import Post from "../../services/Post";

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

  const nextPage = () => {
    changePage(currentPage + 1);
    setCurrentPage(currentPage + 1);
    setUpdateData(true);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
      setCurrentPage(currentPage - 1);
      setUpdateData(true);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="m-2">Book Samsys</h2>
        <Search />
        <Post />
      </div>
      
      
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

        <div className="btn-wrapper">
          <PreviousNextBtn
            onPreviousClick={previousPage}
            onNextClick={nextPage}
            disabledPrevious={currentPage === 1}
            disabledNext={!data || data.length === 0}
            currentPage={currentPage}
            totalPages={Math.ceil(
              (data.length as number) / itemsPerPage.length
            )}
          />
          <div className="space-between"></div>
          <Ddown onSelect={handleDropdownChange} />
          <div className="space-between"></div>
        </div>
      </div>
    </>
  );
}
