import React from "react";
import "./style.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <h1>ola</h1>
    <Link to={"/livros"}>
      <Button className="btn btn-danger" color="primary">
        Clique para Aceder a Base de Livros 
      </Button>
    </Link>
    </>
  );
}
