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
import useGetRequest from "../Get";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookMedical } from "@fortawesome/free-solid-svg-icons";

export default function Post(
  args: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Modal> &
    Readonly<ModalProps>
) {

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
    await postRequest();
    toggle();
  };
  
  const [selectLivro, setSelectLivro] = useState({
    isbn: "",
    livroNome: "",
    preco: 0,
  });


  const { getRequest } = useGetRequest();
  const [updateData, setUpdateData] = useState(false)

  const postRequest = async () => {
    try {
      const selectLivroJSON = JSON.stringify(selectLivro);
      console.log(selectLivroJSON);
      const response = await axios.post(
        "https://localhost:7011/Livro",
        selectLivro
      );
      if (response.data) {
        console.log(`Solicitação 'POST' bem-sucedida: `, response.data);
        await getRequest();
        setUpdateData(true)
      } else {
        console.error("Erro na resposta do servidor:", response);
      }
    } catch (error) {
      console.error("Erro ao realizar a solicitação POST:", error);
    }
  };

  return (
    <div className="container">
      <Button color="warning" onClick={toggle}>
        Adicionar Livro <FontAwesomeIcon icon={faBookMedical} />
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
              />
              <br />
            </Col>
            <Col>
              <Button color="primary" type="submit">
                Adicionar
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
