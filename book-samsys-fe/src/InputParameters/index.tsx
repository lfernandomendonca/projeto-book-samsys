import { useState } from "react";

const InputParameters = () => {
  const [selectLivro, setSelectLivro] = useState({
    isbn: "",
    livroNome: "",
    preco: 0,
  });

  return { selectLivro, setSelectLivro };
};

export default InputParameters;
