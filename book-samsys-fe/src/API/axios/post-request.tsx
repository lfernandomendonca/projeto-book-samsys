import axios from "axios";
import { useState } from "react";
import Livro from "../../book Data/livro";

const [data, dataSet] = useState<Array<Livro>>([])
const postRequest = async () => {
    try {
      const response = await axios.post('https://localhost:7011/Livro');
      const dataArray: any[] = response.data.obj.value;
      console.log(dataArray);

      if (Array.isArray(dataArray)) {
        dataSet(dataArray);
      } else {
        console.error("Não há array de livros.", dataArray);
      }
    } catch (error) {
      console.error("Erro ao realizar a requisição.", error);
    }
  }
  export default postRequest