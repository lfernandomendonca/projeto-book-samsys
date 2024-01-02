import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";

export default function Booklist() {

  return (
    <>
    <header>
        
    <div className="container">
        <h2 className="m-2">Book Samsys</h2>
        </div>
    </header>

    <div className="container">
        <Table hover responsive size="sm" striped className="table">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Nome da Obra</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody></tbody>
          </Table>
</div>
    </>
  );
}
