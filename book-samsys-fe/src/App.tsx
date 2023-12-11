import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./component/header/header";
import BookTable from "./component/table/table";


function App() {
  return (
    <>
    <Header />
    <br />
    <BookTable />
    </>
  );

}

export default App;
