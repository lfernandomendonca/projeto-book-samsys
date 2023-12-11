import { Table } from "reactstrap";
import Livro from "../../book Data/livro";
import useGetRequest from "../../API/axios/get-request";

const BookTable = () => {
const {data, getRequest} = useGetRequest()


return (
  <>
    <div className="container">
      <Table hover responsive size="sm" striped>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Nome da Obra</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Livro: Livro, index: any) => (
            <tr key={index}>
              <td>{Livro.isbn}</td>
              <td>{Livro.livroNome}</td>
              <td>{Livro.preco}</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </>
);
          }
      export default BookTable