import React from "react";
import "./App.css";
import Livros from "./components/Livros";
import "bootstrap/dist/css/bootstrap.min.css";
import BookModal from "./components/Post";

function App() {
  return (
    <>
      <div className="container">
        <br />
        <BookModal />
        <br />

        <br />
        <Livros />
      </div>
    </>
  );
}

export default App;
