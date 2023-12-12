import React, { useEffect, useState } from "react";
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
import Livro from "../../book Data/livro";

function ReactModal(
  args: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Modal> &
    Readonly<ModalProps>
) {
  const [data, setData] = useState<Array<Livro>>([]);

  const postRequest = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7011/Livro",
        selectLivro
      );
      setData(data.concat(response.data));
      console.log(`Solicitaçãp 'POST' bem-sucedida: `, response.data);
    } catch (error) {
      console.log(error);
      console.error("Erro ao realizar a solicitação POST:", error);
    }
  };

  const submitForm = async () => {
    await postRequest();
  };

  useEffect(() => {}, [data]);

  const [selectLivro, setSelectLivro] = useState({
    isbn: "",
    livroNome: "",
    preco: "",
  });

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

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        Adicionar Livro
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader>
          <Button color="secondary" onClick={toggle}>
            X
          </Button>
        </ModalHeader>
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
                Submit
              </Button>
            </Col>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ReactModal;
