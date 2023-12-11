import React, { useState } from "react";
import axios from "axios";
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

function ModalStrap(
  args: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Modal> &
    Readonly<ModalProps>
) {

    const [selectLivro, setSelectLivro ] = useState ({
        isbn: '',
        livroNome: '',
        preco: ''
      })
    
      const handleChange = (e: { target: any }) => {
        const { name, value } = e.target;
        setSelectLivro({
          ...selectLivro,
          [name]: value
        });
        console.log(selectLivro);
      };

      
      
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
          <Form>
              <Col>
                <Label className="visually-hidden" for="ISBN">
                  ISBN
                </Label>
                <Input
                 onChange={handleChange}
                  id="ISBN"
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
                  id="nomeLivro"
                  name="nomeLivro"
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
                  id="preco"
                  onChange={handleChange}
                  name="preco"
                  placeholder="Preço"
                  type="number"
                />
                <br />
              </Col>
              <Col>
                <Button color="primary">Submit</Button>
              </Col>
           
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalStrap;
