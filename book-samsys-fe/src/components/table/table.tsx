import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import MyBtn from '../button/button.tsx';
import useApiRequest from '../../Hooks/get-request.tsx';

const MainTable = () => {
  const { data } = useApiRequest();

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Nome do Livro</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {data.map((livro) => (
            <tr key={livro.ISBN}>
              <td>{livro.ISBN}</td>
              <td>{livro.LivroNome}</td>
              <td>{livro.Preco}</td>
              <td><MyBtn color='primary' text='editar' size=' ' /><MyBtn color='danger' text='excluir' size=' ' /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MainTable;
