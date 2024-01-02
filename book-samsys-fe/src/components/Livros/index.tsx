import React, { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";
import Delete from "../../services/Delete";
import Put from "../../services/Put";
import Get from "../../services/Get";
import Ddown from "../Ddown";
import PreviousNextBtn from "../PreviousNextBtn";
import "./livros-style.css";
import Post from "../../services/Post";

interface LivrosProps {}

export default function Livros({}: LivrosProps): JSX.Element {
  const { data, getRequest, itemsPerPage, changePage } = Get();
  const [updateData, setUpdateData] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    getRequest();
  }, [getRequest]);

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

  const handleSearch = () => {
    setUpdateData(true);
  };

  const filteredData =
    data && searchInput
      ? data.filter((Livro) => Livro.isbn.includes(searchInput))
      : data;

  return (
    <>
      <div className="container ">
        <h2 className="m-2">Book Samsys</h2>
        <div className="container btn-wrapper w-25">
          <Input
          className="search-input"
            type="text"
            placeholder="Search by ISBN"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button className="search-btn ml-4" color="primary" type="submit">
            Pesquisar
          </Button>
        </div>
        <br />
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
            {filteredData &&
              filteredData.map((Livro, index) => (
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
            disabledNext={!filteredData || filteredData.length === 0}
            currentPage={currentPage}
            totalPages={Math.ceil(
              (filteredData.length as number) / itemsPerPage.length
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
