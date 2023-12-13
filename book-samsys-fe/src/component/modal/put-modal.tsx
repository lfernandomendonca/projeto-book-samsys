import React, { useState } from "react";
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
import useGetRequest from "../../hooks/axios-get-request";

function PutModal(
  args: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Modal> &
    Readonly<ModalProps>
) {
  const { data } = useGetRequest();

  const handleChange = (e: { target: any }) => {
    const { name, value } = e.target;
    setSelectLivro({
      ...selectLivro,
      [name]: value,
    });
    console.log(selectLivro);
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
    toggle();
  };

  const putRequest = async () => {
    await axios
      .put("https://localhost:7011/Livro" + "/" + selectLivro.isbn, selectLivro)
      .then((response) => {
        var resposta = response.data;
        var dadosAuxiliares = data;
        dadosAuxiliares.map((livro) => {
          if (livro.isbn === selectLivro.isbn) {
            livro.livroNome = resposta.livroNome;
            livro.preco = resposta.preco;
          }
        });
        toggle();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitForm = async () => {
    await putRequest();
  };

  const [selectLivro, setSelectLivro] = useState({
    isbn: "",
    livroNome: "",
    preco: 0,
  });

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Editar
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Col>
              <Label className="visually-hidden" for="ISBN">
                ISBN
              </Label>
              <Input
                readOnly
                name="isbn"
                placeholder="Número de ISBN"
                type="text"
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
                placeholder="Nome da Obra"
                type="text"
                value={selectLivro && selectLivro.livroNome}
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
                placeholder="Preço"
                type="number"
                value={selectLivro && selectLivro.preco}
              />
              <br />
            </Col>
            <Col>
              <Button color="primary" type="submit">
                Editar
              </Button>
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
export default PutModal;
