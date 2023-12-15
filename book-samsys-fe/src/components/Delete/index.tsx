import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalProps,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import Livro from "../../book Data";

export default function Delete(
  args: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Modal> &
    Readonly<ModalProps> & { isbn: string; }
) {
  const [data, setData] = useState<Array<Livro>>([]);
  const {isbn} = args;
  const [modal, setModal] = useState(false);
  

  const toggle = () => setModal(!modal);

  const deleteRequest = async () => {
    try {
      console.log("isbn", isbn)

      await axios.delete(`https://localhost:7011/Livro/${isbn}`)
      .then(response => {
        setData(data.filter(livro => livro.isbn !== response.data))
      toggle();
      })
      
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };


  return (
    <>
       <Button color="danger" onClick={toggle}>
      Remover
    </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Delete Item</ModalHeader>
        <ModalBody>Tem certeza que deseja remover este Livro?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deleteRequest}>
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
