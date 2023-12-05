import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import MyBtn from '../button/button.tsx';

class MainTable extends Component {
    render() {
        return(
            <div className="container">
            <Table striped>
                <thead>
                    <tr>
                        <th>Nome do Livro</th>
                        <th>Preço</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                        LivroDTO.LivroNome
                        </th>
                        <td>Livro.Preco</td>
                        <td><MyBtn /> <MyBtn /></td>
                        <th scope="row">

                            
                        </th>
                    </tr>
                </tbody>
            </Table>
            </div>
            

        )
    }
}
    export default MainTable