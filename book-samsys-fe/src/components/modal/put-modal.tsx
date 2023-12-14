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
import useGetRequest from "../../services/axios-get-request";

function usePutModal(
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
      var dadosAuxiliares = data;
      dadosAuxiliares.map((livro) => {
        console.log("Antes da atualização:", livro);
        if (livro.isbn === selectLivro.isbn) {
          livro.isbn = resposta.isbn;
          livro.livroNome = resposta.livroNome;
          livro.preco = resposta.preco;
          console.log("Depois da atualização:", livro);
        }
      });

      toggle();
    } catch (error) {
      // Verifica se o erro é um erro Axios
      if (axios.isAxiosError(error)) {
        // Erros específicos do Axios
        console.error("Erro no pedido Axios:", error.message);
        console.error("Configuração do pedido:", error.config);
      } else {
        // Outros erros
        console.error("Erro ao realizar a solicitação PUT:", error);
      }
    }
  };

  const submitForm = async () => {
    await putRequest();
  };

  const [selectLivro, setSelectLivro] = useState({
    isbn: "",
    livroNome: "",
    preco: 0.0,
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
                onChange={handleChange}
                name="isbn"
                type="text"
                placeholder="Alterar ISBN"
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
export default usePutModal;
