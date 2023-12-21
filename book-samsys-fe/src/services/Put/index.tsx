import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import {
  Button,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalProps,
} from "reactstrap";
import axios from "axios";
import Livro from "../../Livro";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Put(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Modal> &
    Readonly<ModalProps> & {
      isbn: string;
      updateData: React.Dispatch<React.SetStateAction<boolean>>;
    }
) {
  const { isbn, updateData, data } = props;

  const [modal, setModal] = useState(false);
  const [selectLivro, setSelectLivro] = useState({
    isbn: "",
    livroNome: "",
    preco: 0.0,
  });

  useEffect(() => {
    setSelectLivro((prev) => ({ ...prev, isbn }));
  }, [isbn]);

  const toggle = () => setModal(!modal);

  const handleChange = (e: { target: any }) => {
    const { name, value } = e.target;
    setSelectLivro((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
    toggle();
  };

  const putRequest = async () => {
    try {
      const jsonData = JSON.stringify(selectLivro);
      console.log("Dados a serem enviados:", jsonData);

      const response = await axios.put(
        `https://localhost:7011/Livro/${selectLivro.isbn}`,
        selectLivro
      );
      console.log("Resposta do servidor:", response.data);

      var resposta = response.data;
      console.log("Resposta do servidor:", resposta);
      const updatedData = data.map((livro: Livro) =>
        livro.isbn === selectLivro.isbn
          ? { ...livro, livroNome: resposta.livroNome, preco: resposta.preco }
          : livro
      );

      // Update the state in the 'Livros' component
      updateData(true);

      toggle();
    } catch (error) {
      // Handle errors
      console.error("Erro ao realizar a solicitação PUT:", error);
    }
  };

  const submitForm = async () => {
    await putRequest();
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
      <FontAwesomeIcon icon={faPen} />
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Col>
              <Label className="visually-hidden" for="ISBN">
                ISBN
              </Label>
              <Input
                onChange={handleChange}
                name="isbn"
                type="text"
                disabled={true}
                value={selectLivro.isbn}
              />
            </Col>
            <br />
            <Col>
              <Label className="visually-hidden" for="nomeLivro">
                Nome do Livro
              </Label>
              <Input
                onChange={handleChange}
                name="livroNome"
                type="text"
                placeholder="Alterar nome"
              />
            </Col>
            <br />
            <Col>
              <Label className="visually-hidden" for="preco">
                Preço
              </Label>
              <Input
                onChange={handleChange}
                name="preco"
                type="number"
                placeholder="Alterar Preço"
              />
              <br />
            </Col>
            <Col>
              <Button color="primary" type="submit">
                Salvar Alterações
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </Col>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
