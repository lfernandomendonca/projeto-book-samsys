import React from "react";
import "./App.css";
import Livros from "./components/Livros";
import "bootstrap/dist/css/bootstrap.min.css";  
import Post from "./components/Post";

function App() {
  return (
    <>
      <Post />
      <br />
      <Livros />
    </>
  );
}

export default App;
