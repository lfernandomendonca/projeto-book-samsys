import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import axios from "axios";
import { Form, FormGroup, Input, Button } from "reactstrap";
import Get from "../Get";
import "./search-style.css";

export default function Search() {
  const { data, setData } = Get();
  const [inputIsbn, setInputIsbn] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const searchRequest = async () => {
    console.log(
      "Enviando requisição para:",
      `https://localhost:7011/livro/${inputIsbn}`
    );
    try {
      const response = await axios.get(
        `https://localhost:7011/livro/${inputIsbn}`
      );

      if (response.data != null) {
        setData([response.data]);
        console.log(response.data);
      } else {
        console.error("Não há livro disponível.", response.data);
      }
    } catch (error) {
      console.error("Erro ao realizar a requisição.", error);
    }
  };

  const handler = async (e: any) => {
    e.preventDefault();
    searchRequest();
    setModalOpen(true); // Abre o modal ao clicar no botão "Pesquisar"
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="w-25">
        <Form onSubmit={handler}>
          <FormGroup className="d-flex align-items-center">
            <Input
              id="isbnInput"
              name="isbnInput"
              placeholder="Inserir ISBN"
              type="text"
              value={inputIsbn}
              onChange={(e) => setInputIsbn(e.target.value)}
            />
            <Button className="search-btn ml-4" color="primary" type="submit">
              Pesquisar
            </Button>
          </FormGroup>
        </Form>
      </div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>Resultado da Pesquisa</ModalHeader>
        <ModalBody>
          <Table hover responsive size="sm" striped className="table">
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Nome da Obra</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {data.map((Livro, index) => (
                <tr key={index}>
                  <td>{Livro.isbn}</td>
                  <td>{Livro.livroNome}</td>
                  <td>{Livro.preco}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </>
  );
}
